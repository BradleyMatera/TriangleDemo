import type { DemoInstance } from "../../types";
import { triangleVertexWgsl, redFragmentWgsl } from "./shaders";

export type HelloTriangleOptions = {
  vertexShader?: string;
  fragmentShader?: string;
};

export async function createHelloTriangleDemo(
  device: GPUDevice,
  format: GPUTextureFormat,
  options: HelloTriangleOptions = {}
): Promise<DemoInstance> {
  const vertex = options.vertexShader ?? triangleVertexWgsl;
  const fragment = options.fragmentShader ?? redFragmentWgsl;

  const pipeline = device.createRenderPipeline({
    layout: "auto",
    vertex: {
      module: device.createShaderModule({ code: vertex }),
      entryPoint: "main"
    },
    fragment: {
      module: device.createShaderModule({ code: fragment }),
      entryPoint: "main",
      targets: [{ format }]
    },
    primitive: {
      topology: "triangle-list"
    }
  });

  return {
    clearColor: { r: 0.1, g: 0.3, b: 0.35, a: 1 },
    requiresDepth: false,
    resize: () => undefined,
    update: () => undefined,
    render: (pass) => {
      pass.setPipeline(pipeline);
      pass.draw(3, 1, 0, 0);
    },
    getStats: () => ({ drawCalls: 1, vertices: 3, triangles: 1 }),
    dispose: () => {
      // GPUShaderModule resources are GC-managed.
    }
  };
}
