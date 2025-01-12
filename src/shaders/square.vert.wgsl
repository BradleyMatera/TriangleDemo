@vertex
fn main(
  @builtin(vertex_index) VertexIndex : u32
) -> @builtin(position) vec4<f32> {
  var pos = array<vec2<f32>, 6>(
    vec2(-0.5, -0.5), // Bottom-left
    vec2(0.5, -0.5),  // Bottom-right
    vec2(-0.5, 0.5),  // Top-left
    vec2(-0.5, 0.5),  // Top-left (second triangle)
    vec2(0.5, -0.5),  // Bottom-right (second triangle)
    vec2(0.5, 0.5)    // Top-right
  );

  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);
}