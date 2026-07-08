import { triangleVertexWgsl, redFragmentWgsl } from "@/lib/webgpu/samples/hello-triangle/shaders";
import { basicVertexWgsl, texturedFragmentWgsl } from "@/lib/webgpu/samples/textured-cube/shaders";
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

const sources: Partial<Record<LessonId, LessonShaderSource>> = {
  "ch1-first-triangle": defaultSource,
  "ch2-vertex-buffers": defaultSource,
  "ch3-index-buffers": defaultSource,
  "ch4-uniform-buffers": defaultSource,
  "ch5-matrices": defaultSource,
  "ch6-coordinate-systems": defaultSource,
  "ch7-textures": {
    vertexFile: "basic.vert.wgsl",
    fragmentFile: "sampleTextureMixColor.frag.wgsl",
    vertex: basicVertexWgsl,
    fragment: texturedFragmentWgsl
  },
  "ch8-lighting": {
    vertexFile: "basic.vert.wgsl",
    fragmentFile: "sampleTextureMixColor.frag.wgsl",
    vertex: basicVertexWgsl,
    fragment: texturedFragmentWgsl
  }
};

export function getLessonShaderSource(id: LessonId): LessonShaderSource {
  return sources[id] ?? defaultSource;
}
