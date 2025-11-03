import type { DemoInstance } from "../../types";

const vertexShaderUrl = new URL("./shaders/triangle.vert.wgsl", import.meta.url);
const fragmentShaderUrl = new URL("./shaders/red.frag.wgsl", import.meta.url);

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

export async function createHelloTriangleDemo(
  device: GPUDevice,
  format: GPUTextureFormat
): Promise<DemoInstance> {
  const { vertex, fragment } = await loadShaders();

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
    dispose: () => {
      // GPUShaderModule resources are GC-managed.
    }
  };
}
