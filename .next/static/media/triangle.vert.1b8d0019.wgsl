// Adapted from the official WebGPU Samples "Hello Triangle".
@vertex
fn main(@builtin(vertex_index) vertex_index : u32) -> @builtin(position) vec4<f32> {
  var positions = array<vec2<f32>, 3>(
    vec2<f32>(0.0, 0.5),
    vec2<f32>(-0.5, -0.5),
    vec2<f32>(0.5, -0.5)
  );

  return vec4<f32>(positions[vertex_index], 0.0, 1.0);
}
