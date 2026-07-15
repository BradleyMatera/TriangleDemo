import { mat4 } from "gl-matrix";
import type { DemoInstance } from "../../types";
import { useGeometryStore, type GeometryShapeId } from "@/lib/stores/geometry-store";
import { useCameraStore } from "@/lib/stores/camera-store";
import type { ShaderOverrides } from "../../triangle-demo";

type MeshData = {
  vertices: Float32Array;
  indices: Uint32Array;
  vertexCount: number;
  triangleCount: number;
};

const defaultVertexShader = /* wgsl */ `
struct Uniforms {
  mvp: mat4x4f,
};

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexOut {
  @builtin(position) position: vec4f,
  @location(0) color: vec3f,
};

@vertex
fn main(@location(0) position: vec3f, @location(1) color: vec3f) -> VertexOut {
  var output: VertexOut;
  output.position = uniforms.mvp * vec4f(position, 1.0);
  output.color = color;
  return output;
}
`;

const defaultFragmentShader = /* wgsl */ `
@fragment
fn main(@location(0) color: vec3f) -> @location(0) vec4f {
  return vec4f(color, 1.0);
}
`;

export async function createGeometryMeshDemo(
  device: GPUDevice,
  format: GPUTextureFormat,
  shapeId: GeometryShapeId,
  shaders?: ShaderOverrides
): Promise<DemoInstance> {
  const mesh = buildMesh(shapeId, useGeometryStore.getState().subdivisions);

  const effectiveVertex = shaders?.vertexShader ?? defaultVertexShader;
  const effectiveFragment = shaders?.fragmentShader ?? defaultFragmentShader;

  const pipeline = device.createRenderPipeline({
    layout: "auto",
    vertex: {
      module: device.createShaderModule({ code: effectiveVertex }),
      entryPoint: "main",
      buffers: [
        {
          arrayStride: 6 * 4,
          attributes: [
            { shaderLocation: 0, offset: 0, format: "float32x3" },
            { shaderLocation: 1, offset: 3 * 4, format: "float32x3" }
          ]
        }
      ]
    },
    fragment: {
      module: device.createShaderModule({ code: effectiveFragment }),
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
    size: mesh.vertices.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
  });
  device.queue.writeBuffer(
    vertexBuffer,
    0,
    mesh.vertices.buffer,
    mesh.vertices.byteOffset,
    mesh.vertices.byteLength
  );

  const indexBuffer = device.createBuffer({
    size: mesh.indices.byteLength,
    usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
  });
  device.queue.writeBuffer(
    indexBuffer,
    0,
    mesh.indices.buffer,
    mesh.indices.byteOffset,
    mesh.indices.byteLength
  );

  const uniformBuffer = device.createBuffer({
    size: 64,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
  });

  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 0,
        resource: { buffer: uniformBuffer }
      }
    ]
  });

  const viewMatrix = mat4.create() as Float32Array;
  const projectionMatrix = mat4.create() as Float32Array;
  const viewProjectionMatrix = mat4.create() as Float32Array;
  const modelMatrix = mat4.create() as Float32Array;
  const mvp = mat4.create() as Float32Array;
  const uniformData = new Float32Array(16);
  let aspect = 1;

  const updateViewProjection = () => {
    mat4.lookAt(viewMatrix, [0, 2.4, 5.2], [0, 0, 0], [0, 1, 0]);
    mat4.perspective(projectionMatrix, (48 * Math.PI) / 180, aspect, 0.1, 100);
    mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);
  };

  updateViewProjection();

  return {
    clearColor: { r: 0.025, g: 0.03, b: 0.07, a: 1 },
    requiresDepth: true,
    resize: (width, height) => {
      if (height === 0) return;
      aspect = width / height;
      updateViewProjection();
    },
    update: (timestamp) => {
      const geometry = useGeometryStore.getState();
      const camera = useCameraStore.getState();
      const timeRotation = timestamp / 1600;

      mat4.identity(modelMatrix);
      mat4.translate(modelMatrix, modelMatrix, [
        geometry.translation.x + camera.panX * 0.05,
        geometry.translation.y - camera.panY * 0.05,
        geometry.translation.z
      ]);
      mat4.rotateX(modelMatrix, modelMatrix, degreesToRadians(geometry.rotation.x + camera.orbitX) + timeRotation * 0.08);
      mat4.rotateY(modelMatrix, modelMatrix, degreesToRadians(geometry.rotation.y + camera.orbitY) + timeRotation * 0.18);
      mat4.rotateZ(modelMatrix, modelMatrix, degreesToRadians(geometry.rotation.z));
      mat4.scale(modelMatrix, modelMatrix, [geometry.scale * camera.zoom, geometry.scale * camera.zoom, geometry.scale * camera.zoom]);
      mat4.multiply(mvp, viewProjectionMatrix, modelMatrix);

      uniformData.set(mvp);
      device.queue.writeBuffer(uniformBuffer, 0, uniformData.buffer, uniformData.byteOffset, uniformData.byteLength);
    },
    render: (pass) => {
      pass.setPipeline(pipeline);
      pass.setVertexBuffer(0, vertexBuffer);
      pass.setIndexBuffer(indexBuffer, "uint32");
      pass.setBindGroup(0, bindGroup);
      pass.drawIndexed(mesh.indices.length, 1, 0, 0, 0);
    },
    getStats: () => ({ drawCalls: 1, vertices: mesh.vertexCount, triangles: mesh.triangleCount }),
    dispose: () => {
      vertexBuffer.destroy();
      indexBuffer.destroy();
      uniformBuffer.destroy();
    }
  };
}

function degreesToRadians(value: number) {
  return (value * Math.PI) / 180;
}

function buildMesh(shapeId: GeometryShapeId, subdivisions: number): MeshData {
  const detail = Math.max(0, Math.min(3, subdivisions));
  switch (shapeId) {
    case "quad":
    case "plane":
      return createPlane(detail);
    case "cube":
      return createBox();
    case "sphere":
      return createSphere(12 + detail * 4, 24 + detail * 8, [1, 1, 1]);
    case "cylinder":
      return createCylinder(24 + detail * 8, false);
    case "cone":
      return createCylinder(24 + detail * 8, true);
    case "torus":
      return createTorus(18 + detail * 4, 36 + detail * 8);
    case "monkey":
      return createMonkeyProxy();
    case "bunny":
      return createBunnyProxy();
    case "triangle":
    default:
      return createTriangle();
  }
}

function packMesh(positions: number[], indices: number[]): MeshData {
  const vertices = new Float32Array((positions.length / 3) * 6);
  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i]!;
    const y = positions[i + 1]!;
    const z = positions[i + 2]!;
    const offset = (i / 3) * 6;
    vertices[offset] = x;
    vertices[offset + 1] = y;
    vertices[offset + 2] = z;
    vertices[offset + 3] = 0.45 + x * 0.28;
    vertices[offset + 4] = 0.55 + y * 0.25;
    vertices[offset + 5] = 0.75 + z * 0.2;
  }
  return {
    vertices,
    indices: new Uint32Array(indices),
    vertexCount: positions.length / 3,
    triangleCount: indices.length / 3
  };
}

function createTriangle() {
  return packMesh([-0.9, -0.65, 0, 0, 0.9, 0, 0.9, -0.65, 0], [0, 1, 2]);
}

function createPlane(subdivisions: number) {
  const cells = 1 + subdivisions * 2;
  const positions: number[] = [];
  const indices: number[] = [];
  for (let y = 0; y <= cells; y += 1) {
    for (let x = 0; x <= cells; x += 1) {
      positions.push(x / cells * 2 - 1, 0, y / cells * 2 - 1);
    }
  }
  for (let y = 0; y < cells; y += 1) {
    for (let x = 0; x < cells; x += 1) {
      const a = y * (cells + 1) + x;
      const b = a + 1;
      const c = a + cells + 1;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  return packMesh(positions, indices);
}

function createBox() {
  const positions = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
    -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1
  ];
  const indices = [
    0, 2, 1, 0, 3, 2, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4,
    3, 7, 6, 3, 6, 2, 1, 2, 6, 1, 6, 5, 0, 4, 7, 0, 7, 3
  ];
  return packMesh(positions, indices);
}

function createSphere(rings: number, segments: number, scale: [number, number, number], offset: [number, number, number] = [0, 0, 0]) {
  const positions: number[] = [];
  const indices: number[] = [];
  for (let r = 0; r <= rings; r += 1) {
    const v = r / rings;
    const theta = v * Math.PI;
    for (let s = 0; s <= segments; s += 1) {
      const u = s / segments;
      const phi = u * Math.PI * 2;
      positions.push(
        Math.sin(theta) * Math.cos(phi) * scale[0] + offset[0],
        Math.cos(theta) * scale[1] + offset[1],
        Math.sin(theta) * Math.sin(phi) * scale[2] + offset[2]
      );
    }
  }
  for (let r = 0; r < rings; r += 1) {
    for (let s = 0; s < segments; s += 1) {
      const a = r * (segments + 1) + s;
      const b = a + segments + 1;
      indices.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  return packMesh(positions, indices);
}

function createCylinder(segments: number, cone: boolean) {
  const positions: number[] = [];
  const indices: number[] = [];
  const topRadius = cone ? 0 : 0.75;
  const bottomRadius = 0.85;
  for (let i = 0; i < segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2;
    positions.push(Math.cos(angle) * bottomRadius, -1, Math.sin(angle) * bottomRadius);
    positions.push(Math.cos(angle) * topRadius, 1, Math.sin(angle) * topRadius);
  }
  const bottomCenter = positions.length / 3;
  positions.push(0, -1, 0);
  const topCenter = positions.length / 3;
  positions.push(0, 1, 0);
  for (let i = 0; i < segments; i += 1) {
    const next = (i + 1) % segments;
    indices.push(i * 2, next * 2, i * 2 + 1, i * 2 + 1, next * 2, next * 2 + 1);
    indices.push(bottomCenter, next * 2, i * 2);
    if (!cone) indices.push(topCenter, i * 2 + 1, next * 2 + 1);
  }
  return packMesh(positions, indices);
}

function createTorus(rings: number, segments: number) {
  const positions: number[] = [];
  const indices: number[] = [];
  const major = 0.72;
  const minor = 0.28;
  for (let r = 0; r <= rings; r += 1) {
    const u = (r / rings) * Math.PI * 2;
    for (let s = 0; s <= segments; s += 1) {
      const v = (s / segments) * Math.PI * 2;
      const radius = major + minor * Math.cos(v);
      positions.push(radius * Math.cos(u), minor * Math.sin(v), radius * Math.sin(u));
    }
  }
  for (let r = 0; r < rings; r += 1) {
    for (let s = 0; s < segments; s += 1) {
      const a = r * (segments + 1) + s;
      const b = a + segments + 1;
      indices.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  return packMesh(positions, indices);
}

function createMonkeyProxy() {
  return mergeMeshes([
    createSphere(10, 18, [0.78, 0.62, 0.62]),
    createSphere(8, 12, [0.28, 0.32, 0.22], [-0.78, 0.12, 0]),
    createSphere(8, 12, [0.28, 0.32, 0.22], [0.78, 0.12, 0]),
    createSphere(8, 14, [0.34, 0.22, 0.28], [0, -0.18, 0.58])
  ]);
}

function createBunnyProxy() {
  return mergeMeshes([
    createSphere(10, 18, [0.58, 0.72, 0.48], [0, -0.35, 0]),
    createSphere(9, 16, [0.42, 0.42, 0.36], [0.15, 0.42, 0.05]),
    createSphere(8, 10, [0.12, 0.58, 0.12], [-0.12, 1.05, 0]),
    createSphere(8, 10, [0.12, 0.62, 0.12], [0.34, 1.02, 0.02])
  ]);
}

function mergeMeshes(meshes: MeshData[]) {
  const positions: number[] = [];
  const indices: number[] = [];
  let offset = 0;
  for (const mesh of meshes) {
    for (let i = 0; i < mesh.vertices.length; i += 6) {
      positions.push(mesh.vertices[i]!, mesh.vertices[i + 1]!, mesh.vertices[i + 2]!);
    }
    for (const index of mesh.indices) {
      indices.push(index + offset);
    }
    offset += mesh.vertexCount;
  }
  return packMesh(positions, indices);
}
