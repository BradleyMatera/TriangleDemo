@vertex
fn main(
  @builtin(vertex_index) VertexIndex : u32
) -> @builtin(position) vec4<f32> {
  var pos = array<vec2<f32>, 18>(
    vec2(0.0, 0.0),       // Center
    vec2(0.0, 0.5),       // Top
    vec2(0.43, 0.25),     // Top-right

    vec2(0.0, 0.0),       // Center
    vec2(0.43, 0.25),     // Top-right
    vec2(0.43, -0.25),    // Bottom-right

    vec2(0.0, 0.0),       // Center
    vec2(0.43, -0.25),    // Bottom-right
    vec2(0.0, -0.5),      // Bottom

    vec2(0.0, 0.0),       // Center
    vec2(0.0, -0.5),      // Bottom
    vec2(-0.43, -0.25),   // Bottom-left

    vec2(0.0, 0.0),       // Center
    vec2(-0.43, -0.25),   // Bottom-left
    vec2(-0.43, 0.25),    // Top-left

    vec2(0.0, 0.0),       // Center
    vec2(-0.43, 0.25),    // Top-left
    vec2(0.0, 0.5)        // Top
  );

  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);
}