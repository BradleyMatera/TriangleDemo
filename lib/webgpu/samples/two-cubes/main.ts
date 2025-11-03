import { mat4 } from "gl-matrix";
import type { DemoInstance } from "../../types";
import { cubeVertexArray, cubeVertexCount } from "./cube";

const vertexShaderUrl = new URL("./shaders/basic.vert.wgsl", import.meta.url);
const fragmentShaderUrl = new URL("./shaders/vertexPositionColor.frag.wgsl", import.meta.url);

let shaderCache: Promise<{ vertex: string; fragment: string }> | null = null;

async function loadShaders() {
  if (!shaderCache) {
    shaderCache = Promise.all([
      fetch(vertexShaderUrl).then((res) => res.text()),
      fetch(fragmentShaderUrl).then((res) => res.text())
    ]).then(([vertex, fragment]) => ({ vertex, fragment }));
  }
  return shaderCache;
}

export async function createTwoCubesDemo(
  device: GPUDevice,
  format: GPUTextureFormat
): Promise<DemoInstance> {
  const { vertex, fragment } = await loadShaders();

  const pipeline = device.createRenderPipeline({
    layout: "auto",
    vertex: {
      module: device.createShaderModule({ code: vertex }),
      entryPoint: "main",
      buffers: [
        {
          arrayStride: 10 * 4,
          attributes: [
            { shaderLocation: 0, offset: 0, format: "float32x4" },
            { shaderLocation: 1, offset: 8 * 4, format: "float32x2" }
          ]
        }
      ]
    },
    fragment: {
      module: device.createShaderModule({ code: fragment }),
      entryPoint: "main",
      targets: [{ format }]
    },
    primitive: {
      topology: "triangle-list",
      cullMode: "back"
    },
    depthStencil: {
      format: "depth24plus",
      depthWriteEnabled: true,
      depthCompare: "less"
    }
  });

  const vertexBuffer = device.createBuffer({
    size: cubeVertexArray.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
  });

  device.queue.writeBuffer(
    vertexBuffer,
    0,
    cubeVertexArray.buffer,
    cubeVertexArray.byteOffset,
    cubeVertexArray.byteLength
  );

  const uniformStride = 256;
  const uniformBuffer = device.createBuffer({
    size: uniformStride * 2,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
  });

  const bindGroupLayout = pipeline.getBindGroupLayout(0);

  const bindGroup0 = device.createBindGroup({
    layout: bindGroupLayout,
    entries: [
      {
        binding: 0,
        resource: {
          buffer: uniformBuffer,
          offset: 0,
          size: 64
        }
      }
    ]
  });

  const bindGroup1 = device.createBindGroup({
    layout: bindGroupLayout,
    entries: [
      {
        binding: 0,
        resource: {
          buffer: uniformBuffer,
          offset: uniformStride,
          size: 64
        }
      }
    ]
  });

  const viewMatrix = mat4.create() as Float32Array;
  mat4.lookAt(viewMatrix, [0, 2.5, 6], [0, 0, 0], [0, 1, 0]);

  const projectionMatrix = mat4.create() as Float32Array;
  const viewProjectionMatrix = mat4.create() as Float32Array;
  const modelMatrixLeft = mat4.create() as Float32Array;
  const modelMatrixRight = mat4.create() as Float32Array;
  const mvpLeft = mat4.create() as Float32Array;
  const mvpRight = mat4.create() as Float32Array;
  const uniformDataLeft = new Float32Array(16);
  const uniformDataRight = new Float32Array(16);

  let aspect = 1;

  const updateViewProjection = () => {
    mat4.perspective(projectionMatrix, (45 * Math.PI) / 180, aspect, 0.1, 100.0);
    mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);
  };

  updateViewProjection();

  return {
    clearColor: { r: 0.04, g: 0.05, b: 0.12, a: 1 },
    requiresDepth: true,
    resize: (width, height) => {
      if (height === 0) return;
      aspect = width / height;
      updateViewProjection();
    },
    update: (timestamp) => {
      const rotation = timestamp / 1000;

      mat4.identity(modelMatrixLeft);
      mat4.translate(modelMatrixLeft, modelMatrixLeft, [-1.8, 0, 0]);
      mat4.rotate(modelMatrixLeft, modelMatrixLeft, rotation * 0.7, [0, 1, 0]);
      mat4.rotate(modelMatrixLeft, modelMatrixLeft, rotation * 0.4, [1, 0, 0]);
      mat4.multiply(mvpLeft, viewProjectionMatrix, modelMatrixLeft);

      mat4.identity(modelMatrixRight);
      mat4.translate(modelMatrixRight, modelMatrixRight, [1.8, 0, 0]);
      mat4.rotate(modelMatrixRight, modelMatrixRight, rotation, [0, 1, 0]);
      mat4.rotate(modelMatrixRight, modelMatrixRight, rotation * 0.6, [0, 0, 1]);
      mat4.multiply(mvpRight, viewProjectionMatrix, modelMatrixRight);

      uniformDataLeft.set(mvpLeft);
      uniformDataRight.set(mvpRight);

      device.queue.writeBuffer(uniformBuffer, 0, uniformDataLeft);
      device.queue.writeBuffer(uniformBuffer, uniformStride, uniformDataRight);
    },
    render: (pass) => {
      pass.setPipeline(pipeline);
      pass.setVertexBuffer(0, vertexBuffer);
      pass.setBindGroup(0, bindGroup0);
      pass.draw(cubeVertexCount, 1, 0, 0);
      pass.setBindGroup(0, bindGroup1);
      pass.draw(cubeVertexCount, 1, 0, 0);
    },
    dispose: () => {
      vertexBuffer.destroy();
      uniformBuffer.destroy();
    }
  };
}
