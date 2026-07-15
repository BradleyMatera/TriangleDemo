import { mat4, vec3 } from "wgpu-matrix";
import type { DemoInstance } from "../../types";
import { useCameraStore } from "@/lib/stores/camera-store";
import { basicVertexWgsl, texturedFragmentWgsl } from "./shaders";
import {
  cubeVertexArray,
  cubeVertexCount,
  cubeVertexSize,
  cubePositionOffset,
  cubeUVOffset
} from "../two-cubes/cube";

const textureUrl = new URL("./textures/Di-3d.png", import.meta.url);

export type TexturedCubeOptions = {
  vertexShader?: string;
  fragmentShader?: string;
};

async function loadCubeTexture(device: GPUDevice) {
  try {
    const response = await fetch(textureUrl);
    if (!response.ok) {
      throw new Error(`Failed to load texture: ${response.status}`);
    }
    const blob = await response.blob();
    const imageBitmap = await createImageBitmap(blob);

    const texture = device.createTexture({
      size: [imageBitmap.width, imageBitmap.height, 1],
      format: "rgba8unorm",
      usage:
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.RENDER_ATTACHMENT
    });

    device.queue.copyExternalImageToTexture(
      { source: imageBitmap },
      { texture },
      [imageBitmap.width, imageBitmap.height]
    );

    const sampler = device.createSampler({
      magFilter: "linear",
      minFilter: "linear"
    });

    return { texture, sampler };
  } catch (error) {
    console.warn("Falling back to generated checker texture", error);
    const imageData = new ImageData(
      new Uint8ClampedArray([
        255, 64, 64, 255, 64, 64, 255, 255,
        64, 64, 255, 255, 255, 255, 64, 255
      ]),
      2,
      2
    );

    const bitmap = await createImageBitmap(imageData);

    const texture = device.createTexture({
      size: [bitmap.width, bitmap.height, 1],
      format: "rgba8unorm",
      usage:
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.RENDER_ATTACHMENT
    });

    device.queue.copyExternalImageToTexture(
      { source: bitmap },
      { texture },
      [bitmap.width, bitmap.height]
    );

    const sampler = device.createSampler({
      magFilter: "linear",
      minFilter: "linear"
    });

    return { texture, sampler };
  }
}

export async function createTexturedCubeDemo(
  device: GPUDevice,
  format: GPUTextureFormat,
  options: TexturedCubeOptions = {}
): Promise<DemoInstance> {
  const vertex = options.vertexShader ?? basicVertexWgsl;
  const fragment = options.fragmentShader ?? texturedFragmentWgsl;

  const usesTexture = /textureSample|mySampler|myTexture/.test(fragment);
  const textureAssets = usesTexture ? await loadCubeTexture(device) : null;

  const pipeline = device.createRenderPipeline({
    layout: "auto",
    vertex: {
      module: device.createShaderModule({ code: vertex }),
      entryPoint: "main",
      buffers: [
        {
          arrayStride: cubeVertexSize,
          attributes: [
            {
              shaderLocation: 0,
              offset: cubePositionOffset,
              format: "float32x4"
            },
            {
              shaderLocation: 1,
              offset: cubeUVOffset,
              format: "float32x2"
            }
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
    usage: GPUBufferUsage.VERTEX,
    mappedAtCreation: true
  });

  new Float32Array(vertexBuffer.getMappedRange()).set(cubeVertexArray);
  vertexBuffer.unmap();

  const uniformBuffer = device.createBuffer({
    size: 64,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
  });

  const entries: GPUBindGroupEntry[] = [
    { binding: 0, resource: { buffer: uniformBuffer } }
  ];
  if (usesTexture && textureAssets) {
    entries.push({ binding: 1, resource: textureAssets.sampler });
    entries.push({ binding: 2, resource: textureAssets.texture.createView() });
  }

  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries
  });

  let aspect = 1;
  let projectionMatrix = mat4.perspective((2 * Math.PI) / 5, aspect, 1, 100);
  const uniformData = new Float32Array(16);

  const getTransformationMatrix = (timestamp: number) => {
    const camera = useCameraStore.getState();
    const viewMatrix = mat4.identity();
    mat4.translate(viewMatrix, vec3.fromValues(camera.panX * 0.02, -camera.panY * 0.02, -4 / camera.zoom), viewMatrix);

    const now = timestamp / 1000;
    mat4.rotate(
      viewMatrix,
      vec3.fromValues(Math.sin(now), Math.cos(now), 0),
      1,
      viewMatrix
    );
    mat4.rotate(viewMatrix, vec3.fromValues(1, 0, 0), degreesToRadians(camera.orbitX), viewMatrix);
    mat4.rotate(viewMatrix, vec3.fromValues(0, 1, 0), degreesToRadians(camera.orbitY), viewMatrix);

    const modelViewProjectionMatrix = mat4.create();
    mat4.multiply(projectionMatrix, viewMatrix, modelViewProjectionMatrix);

    return modelViewProjectionMatrix;
  };

  return {
    clearColor: { r: 0.5, g: 0.5, b: 0.5, a: 1 },
    requiresDepth: true,
    resize: (width, height) => {
      if (height === 0) return;
      aspect = width / height;
      projectionMatrix = mat4.perspective((2 * Math.PI) / 5, aspect, 1, 100);
    },
    update: (timestamp) => {
      const transformationMatrix = getTransformationMatrix(timestamp);
      uniformData.set(transformationMatrix);
      device.queue.writeBuffer(uniformBuffer, 0, uniformData);
    },
    render: (pass) => {
      pass.setPipeline(pipeline);
      pass.setVertexBuffer(0, vertexBuffer);
      pass.setBindGroup(0, bindGroup);
      pass.draw(cubeVertexCount, 1, 0, 0);
    },
    getStats: () => ({ drawCalls: 1, vertices: cubeVertexCount, triangles: cubeVertexCount / 3 }),
    dispose: () => {
      vertexBuffer.destroy();
      uniformBuffer.destroy();
      if (textureAssets) textureAssets.texture.destroy();
    }
  };
}

function degreesToRadians(value: number) {
  return (value * Math.PI) / 180;
}
