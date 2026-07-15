import { triangleVertexWgsl, redFragmentWgsl } from "@/lib/webgpu/samples/hello-triangle/shaders";
import { basicVertexWgsl, texturedFragmentWgsl } from "@/lib/webgpu/samples/textured-cube/shaders";
import { twoCubesVertexWgsl, twoCubesFragmentWgsl } from "@/lib/webgpu/samples/two-cubes/shaders";
import type { LessonId } from "./catalog";

export interface LessonShaderSource {
  vertexFile: string;
  fragmentFile: string;
  vertex: string;
  fragment: string;
}

const defaultSource: LessonShaderSource = {
  vertexFile: "triangle.vert.wgsl",
  fragmentFile: "red.frag.wgsl",
  vertex: triangleVertexWgsl,
  fragment: redFragmentWgsl
};

const geometryVertexWgsl = `struct Uniforms {
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

const geometryFragmentWgsl = `@fragment
fn main(@location(0) color: vec3f) -> @location(0) vec4f {
  return vec4f(color, 1.0);
}
`;

const geometrySource: LessonShaderSource = {
  vertexFile: "geometry.vert.wgsl",
  fragmentFile: "geometry.frag.wgsl",
  vertex: geometryVertexWgsl,
  fragment: geometryFragmentWgsl
};

const twoCubesSource: LessonShaderSource = {
  vertexFile: "two-cubes.vert.wgsl",
  fragmentFile: "two-cubes.frag.wgsl",
  vertex: twoCubesVertexWgsl,
  fragment: twoCubesFragmentWgsl
};

const litVertexWgsl = `struct Uniforms {
  mvp: mat4x4f,
};

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexOut {
  @builtin(position) position: vec4f,
  @location(0) worldPos: vec3f,
  @location(1) normal: vec3f,
  @location(2) baseColor: vec3f,
};

@vertex
fn main(@location(0) pos: vec3f, @location(1) col: vec3f) -> VertexOut {
  var out: VertexOut;
  out.position = uniforms.mvp * vec4f(pos, 1.0);
  out.worldPos = pos;
  out.normal = normalize(pos);
  out.baseColor = col;
  return out;
}
`;

const litFragmentWgsl = `@fragment
fn main(
  @location(0) worldPos: vec3f,
  @location(1) normal: vec3f,
  @location(2) baseColor: vec3f
) -> @location(0) vec4f {
  let lightDir = normalize(vec3f(0.5, -1.0, 0.5));
  let ambient = 0.2;
  let diff = max(dot(normal, -lightDir), 0.0);
  return vec4f(baseColor * (ambient + diff), 1.0);
}
`;

const litSource: LessonShaderSource = {
  vertexFile: "lit.vert.wgsl",
  fragmentFile: "lit.frag.wgsl",
  vertex: litVertexWgsl,
  fragment: litFragmentWgsl
};

const texturedSource: LessonShaderSource = {
  vertexFile: "basic.vert.wgsl",
  fragmentFile: "sampleTextureMixColor.frag.wgsl",
  vertex: basicVertexWgsl,
  fragment: texturedFragmentWgsl
};

const sources: Partial<Record<LessonId, LessonShaderSource>> = {
  intro: defaultSource,
  "ch1-first-triangle": defaultSource,
  "ch2-vertex-buffers": geometrySource,
  "ch3-index-buffers": geometrySource,
  "ch4-uniform-buffers": geometrySource,
  "ch5-matrices": twoCubesSource,
  "ch6-coordinate-systems": texturedSource,
  "ch7-textures": texturedSource,
  "ch8-lighting": litSource,
  "ch9-model-loading": geometrySource,
  "ch10-instancing": twoCubesSource,
  "ch11-shadow-mapping": texturedSource,
  "ch12-post-processing": litSource,
  "ch13-particles": geometrySource,
  "ch14-compute-shaders": geometrySource,
  "ch15-optimization": twoCubesSource
};

export function getLessonShaderSource(id: LessonId): LessonShaderSource {
  return sources[id] ?? defaultSource;
}
