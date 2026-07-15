import type { DemoInstance } from "../../types";
import type { ShaderOverrides } from "../../triangle-demo";

const defaultVertexWgsl = `@vertex
fn main(@builtin(vertex_index) idx: u32) -> @builtin(position) vec4f {
  let pos = array<vec2f, 3>(
    vec2f(-1.0, -1.0),
    vec2f( 3.0, -1.0),
    vec2f(-1.0,  3.0)
  );
  return vec4f(pos[idx], 0.0, 1.0);
}
`;

const defaultFragmentWgsl = `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / vec2f(800.0, 600.0);
  return vec4f(uv.x, uv.y, 0.5, 1.0);
}
`;

export async function createFullscreenDemo(
  device: GPUDevice,
  format: GPUTextureFormat,
  overrides?: ShaderOverrides
): Promise<DemoInstance> {
  const vertex = overrides?.vertexShader || defaultVertexWgsl;
  const fragment = overrides?.fragmentShader || defaultFragmentWgsl;

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
    clearColor: { r: 0.025, g: 0.03, b: 0.07, a: 1 },
    requiresDepth: false,
    resize: () => {},
    update: () => {},
    render: (pass) => {
      pass.setPipeline(pipeline);
      pass.draw(3, 1, 0, 0);
    },
    getStats: () => ({ drawCalls: 1, vertices: 3, triangles: 1 }),
    dispose: () => {}
  };
}
