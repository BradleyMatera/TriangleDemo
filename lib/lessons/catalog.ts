export type LessonId =
  | "intro"
  | "ch1-first-triangle"
  | "ch2-vertex-buffers"
  | "ch3-index-buffers"
  | "ch4-uniform-buffers"
  | "ch5-matrices"
  | "ch6-coordinate-systems"
  | "ch7-textures"
  | "ch8-lighting"
  | "ch9-model-loading"
  | "ch10-instancing"
  | "ch11-shadow-mapping"
  | "ch12-post-processing"
  | "ch13-particles"
  | "ch14-compute-shaders"
  | "ch15-optimization";

export type LessonStatus = "locked" | "available" | "in-progress" | "completed";

export type LessonSection = {
  type: "chapter" | "lesson";
  id?: LessonId;
  title: string;
  status: LessonStatus;
  description?: string;
  demo?: LessonDemo;
};

export type LessonDemo =
  | { type: "webgpu"; shape: "hello-triangle" | "textured-cube" | "two-cubes" }
  | { type: "placeholder" };

export const lessonCatalog: LessonSection[] = [
  { type: "lesson", id: "intro", title: "Introduction", status: "completed", description: "What is WebGPU and how does the lab work?" },
  { type: "chapter", title: "Chapter 1", status: "available" },
  { type: "lesson", id: "ch1-first-triangle", title: "Drawing Your First Triangle", status: "available", demo: { type: "webgpu", shape: "hello-triangle" } },
  { type: "chapter", title: "Chapter 2", status: "locked" },
  { type: "lesson", id: "ch2-vertex-buffers", title: "Vertex Buffers", status: "locked" },
  { type: "chapter", title: "Chapter 3", status: "locked" },
  { type: "lesson", id: "ch3-index-buffers", title: "Index Buffers", status: "locked" },
  { type: "chapter", title: "Chapter 4", status: "locked" },
  { type: "lesson", id: "ch4-uniform-buffers", title: "Uniform Buffers", status: "locked" },
  { type: "chapter", title: "Chapter 5", status: "locked" },
  { type: "lesson", id: "ch5-matrices", title: "Matrices", status: "locked" },
  { type: "chapter", title: "Chapter 6", status: "locked" },
  { type: "lesson", id: "ch6-coordinate-systems", title: "Coordinate Systems", status: "locked" },
  { type: "chapter", title: "Chapter 7", status: "locked" },
  { type: "lesson", id: "ch7-textures", title: "Textures", status: "locked", demo: { type: "webgpu", shape: "textured-cube" } },
  { type: "chapter", title: "Chapter 8", status: "locked" },
  { type: "lesson", id: "ch8-lighting", title: "Lighting", status: "locked" },
  { type: "chapter", title: "Chapter 9", status: "locked" },
  { type: "lesson", id: "ch9-model-loading", title: "Model Loading", status: "locked" },
  { type: "chapter", title: "Chapter 10", status: "locked" },
  { type: "lesson", id: "ch10-instancing", title: "Instancing", status: "locked" },
  { type: "chapter", title: "Chapter 11", status: "locked" },
  { type: "lesson", id: "ch11-shadow-mapping", title: "Shadow Mapping", status: "locked" },
  { type: "chapter", title: "Chapter 12", status: "locked" },
  { type: "lesson", id: "ch12-post-processing", title: "Post Processing", status: "locked" },
  { type: "chapter", title: "Chapter 13", status: "locked" },
  { type: "lesson", id: "ch13-particles", title: "Particles", status: "locked" },
  { type: "chapter", title: "Chapter 14", status: "locked" },
  { type: "lesson", id: "ch14-compute-shaders", title: "Compute Shaders", status: "locked" },
  { type: "chapter", title: "Chapter 15", status: "locked" },
  { type: "lesson", id: "ch15-optimization", title: "Optimization", status: "locked" }
];

export function getLessonById(id: LessonId) {
  return lessonCatalog.find((item) => item.id === id);
}

export function getInitialLessonId(): LessonId {
  return "ch1-first-triangle";
}
