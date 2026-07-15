export const twoCubesVertexWgsl = `// Adapted from the official WebGPU Samples "Two Cubes".
struct Uniforms {
  modelViewProjectionMatrix : mat4x4<f32>,
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;

struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0) color : vec4<f32>,
};

@vertex
fn main(
  @location(0) position : vec4<f32>,
  @location(1) color : vec4<f32>
) -> VertexOutput {
  var output : VertexOutput;
  output.position = uniforms.modelViewProjectionMatrix * position;
  output.color = color;
  return output;
}
`;

export const twoCubesFragmentWgsl = `// Adapted from the official WebGPU Samples "Two Cubes".
@fragment
fn main(@location(0) color : vec4<f32>) -> @location(0) vec4<f32> {
  return color;
}
`;
