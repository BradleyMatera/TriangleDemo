import type { LessonId } from "./catalog";

export type LessonTabId =
  | "overview"
  | "concept"
  | "demo"
  | "code"
  | "exercise"
  | "challenge"
  | "check"
  | "summary";

export interface LessonContent {
  id: LessonId;
  title: string;
  estimatedMinutes: number;
  overview: string;
  concept: string;
  demo: {
    instructions: string;
    tip: string;
  };
  code: {
    focus: string;
    explanation: string;
  };
  exercise: {
    prompt: string;
    starter: string;
    solution: string;
  };
  challenge: {
    prompt: string;
    hints: string[];
  };
  check: {
    question: string;
    options: { label: string; correct: boolean }[];
    explanation: string;
  };
  summary: string[];
}

export const lessonContents: Record<LessonId, LessonContent> = {
  intro: {
    id: "intro",
    title: "Introduction",
    estimatedMinutes: 5,
    overview:
      "WebGPU is the next-generation graphics API for the web. It gives JavaScript direct access to the GPU through a modern, low-level, cross-platform interface inspired by Vulkan, Metal, and Direct3D 12.",
    concept:
      "Unlike WebGL, WebGPU separates resource creation from command submission. You create devices, buffers, textures, pipelines, and bind groups up front, then encode work into command buffers and submit them to a queue. This design makes WebGPU more predictable, more efficient, and easier to profile.",
    demo: {
      instructions: "Open the Preview panel to see a live WebGPU render. Use the Lesson sidebar to move through the course.",
      tip: "WebGPU requires Chrome 113+, Edge 113+, or a recent Safari Technology Preview."
    },
    code: {
      focus: "Every lesson exposes the WGSL code that drives the demo.",
      explanation: "WGSL (WebGPU Shading Language) is the shader language for WebGPU. It is intentionally simple, portable, and has well-defined validation rules."
    },
    exercise: {
      prompt: "No exercise for the introduction. Continue to Chapter 1 when you are ready.",
      starter: "",
      solution: ""
    },
    challenge: {
      prompt: "Explore the command palette with ⌘K and switch between panels.",
      hints: ["Try opening the Pipeline Visualizer.", "Toggle GPU metrics in the status bar."]
    },
    check: {
      question: "What does WGSL stand for?",
      options: [
        { label: "Web Graphics Shader Language", correct: true },
        { label: "WebGL Shader Language", correct: false },
        { label: "Web GPU Standard Library", correct: false }
      ],
      explanation: "WGSL = WebGPU Shading Language."
    },
    summary: [
      "WebGPU is the modern low-level graphics API for the web.",
      "Work is encoded into command buffers and submitted to a queue.",
      "WGSL is the portable shading language used by WebGPU."
    ]
  },
  "ch1-first-triangle": {
    id: "ch1-first-triangle",
    title: "Drawing Your First Triangle",
    estimatedMinutes: 12,
    overview:
      "The canonical first program in any graphics API is a colored triangle. In this lesson you will see the smallest complete WebGPU program: a vertex shader that positions three corners and a fragment shader that colors every pixel red.",
    concept:
      "A render pipeline connects a vertex shader and a fragment shader. The vertex shader runs once per vertex and outputs clip-space positions. The rasterizer turns the triangle into fragments, then the fragment shader runs once per fragment to produce a color. The result is written to the framebuffer and presented on screen.",
    demo: {
      instructions: "The Preview panel shows a single red triangle. The vertex shader positions the corners using a hard-coded array; the fragment shader returns a constant red color.",
      tip: "Try editing the red value in the fragment shader to change the triangle color."
    },
    code: {
      focus: "triangle.vert.wgsl",
      explanation:
        "The vertex shader uses the built-in `vertex_index` to pick one of three positions from an array. The output position is a `vec4f` where the fourth component is `1.0`, indicating a point in homogeneous coordinates."
    },
    exercise: {
      prompt: "Modify the fragment shader so the triangle is blue instead of red.",
      starter: "return vec4f(1.0, 0.0, 0.0, 1.0);",
      solution: "return vec4f(0.0, 0.0, 1.0, 1.0);"
    },
    challenge: {
      prompt: "Can you make each vertex a different color using a vertex output and fragment input?",
      hints: [
        "Add an `@location(0)` output from the vertex shader.",
        "Add a matching `@location(0)` input to the fragment shader.",
        "Return the interpolated color from the fragment shader."
      ]
    },
    check: {
      question: "How many times does the vertex shader run for one triangle?",
      options: [
        { label: "Once", correct: false },
        { label: "Three times", correct: true },
        { label: "Once per pixel", correct: false }
      ],
      explanation: "A triangle has three vertices, so the vertex shader runs three times."
    },
    summary: [
      "A render pipeline combines a vertex and fragment shader.",
      "Vertex shaders position vertices; fragment shaders color fragments.",
      "Builtins like `vertex_index` and `position` bridge shader stages."
    ]
  },
  "ch2-vertex-buffers": {
    id: "ch2-vertex-buffers",
    title: "Vertex Buffers",
    estimatedMinutes: 15,
    overview: "Hard-coded positions are useful for demos, but real geometry lives in buffers. This lesson introduces GPU vertex buffers and vertex buffer layouts.",
    concept: "A vertex buffer is a region of GPU memory that holds per-vertex data such as positions, colors, or UVs. The pipeline's vertex state describes the stride between vertices and the format and location of each attribute.",
    demo: {
      instructions: "The demo will render a triangle whose positions and colors come from a vertex buffer.",
      tip: "Inspect the GPU Inspector to see the buffer count increase."
    },
    code: {
      focus: "Pipeline vertex state",
      explanation: "`arrayStride` tells WebGPU how many bytes each vertex occupies. Attributes define which shader locations receive which chunks of those bytes."
    },
    exercise: {
      prompt: "Add a second triangle by appending three more vertices to the buffer and changing the draw call count.",
      starter: "pass.draw(3, 1, 0, 0);",
      solution: "pass.draw(6, 1, 0, 0);"
    },
    challenge: {
      prompt: "Interleave position and color in one buffer and color the triangle with a gradient.",
      hints: ["Increase arrayStride to include color bytes.", "Add a second attribute at `@location(1)`.", "Use the color in the fragment shader."]
    },
    check: {
      question: "What does `arrayStride` describe?",
      options: [
        { label: "The number of vertices in the buffer", correct: false },
        { label: "The byte distance between consecutive vertices", correct: true },
        { label: "The size of one attribute", correct: false }
      ],
      explanation: "`arrayStride` is the number of bytes from the start of one vertex to the start of the next."
    },
    summary: [
      "Vertex buffers store per-vertex data on the GPU.",
      "The vertex state describes stride and attribute layout.",
      "Shader locations connect buffer attributes to shader inputs."
    ]
  },
  "ch3-index-buffers": {
    id: "ch3-index-buffers",
    title: "Index Buffers",
    estimatedMinutes: 15,
    overview: "Index buffers let multiple triangles share vertices. They are essential for efficient meshes.",
    concept: "Instead of duplicating vertex data for adjacent triangles, an index buffer stores integer offsets into the vertex buffer. The GPU assembles primitives by reading these indices.",
    demo: { instructions: "Render a quad using two triangles and four vertices via an index buffer.", tip: "Watch the vertex count drop compared to two independent triangles." },
    code: { focus: "Index buffer creation", explanation: "An index buffer is created with `GPUBufferUsage.INDEX` and bound with `pass.setIndexBuffer`. The `indexFormat` must match the buffer data type, usually `uint16`." },
    exercise: { prompt: "Create an index buffer that draws a quad from four vertices.", starter: "new Uint16Array([0, 1, 2, 0, 2, 3])", solution: "new Uint16Array([0, 1, 2, 0, 2, 3])" },
    challenge: { prompt: "Build an octagon using one vertex buffer and one index buffer.", hints: ["Place 8 vertices around a circle.", "Use a triangle fan or indexed triangles.", "Minimize duplicate positions."] },
    check: { question: "What is the main benefit of index buffers?", options: [{ label: "Faster shaders", correct: false }, { label: "Shared vertices between triangles", correct: true }, { label: "Smaller textures", correct: false }], explanation: "Index buffers reduce memory and vertex processing by reusing vertices." },
    summary: ["Index buffers store offsets into a vertex buffer.", "They let triangles share vertices for efficient meshes.", "Use `setIndexBuffer` and `drawIndexed` to render indexed geometry."]
  },
  "ch4-uniform-buffers": {
    id: "ch4-uniform-buffers",
    title: "Uniform Buffers",
    estimatedMinutes: 18,
    overview: "Uniforms are values that stay constant during a draw call, such as transformation matrices, colors, or time. This lesson covers uniform buffers and bind groups.",
    concept: "A uniform buffer is a small GPU buffer updated from JavaScript each frame. A bind group connects buffers, textures, and samplers to the shader bindings declared in WGSL.",
    demo: { instructions: "The triangle changes color or position based on a uniform value.", tip: "Open the GPU Inspector to see uniform buffer usage." },
    code: { focus: "Bind group layout", explanation: "`@binding(0) @group(0)` in WGSL matches a bind group entry with binding 0. The bind group layout must agree with the shader declarations." },
    exercise: { prompt: "Pass a `vec4f` color uniform and tint the triangle green.", starter: "struct Params { color: vec4f };", solution: "Return `params.color` from the fragment shader." },
    challenge: { prompt: "Animate the triangle position with a time uniform.", hints: ["Upload `performance.now()` as a float.", "Add an offset in the vertex shader.", "Keep the triangle inside clip space."] },
    check: { question: "What is a uniform buffer used for?", options: [{ label: "Storing per-vertex data", correct: false }, { label: "Per-draw constants like matrices or colors", correct: true }, { label: "Texture pixel data", correct: false }], explanation: "Uniform buffers hold data that is constant for the duration of a draw call." },
    summary: ["Uniform buffers hold per-draw constants.", "Bind groups link resources to shader bindings.", "Layouts must match shader declarations exactly."]
  },
  "ch5-matrices": {
    id: "ch5-matrices",
    title: "Matrices",
    estimatedMinutes: 20,
    overview: "Matrices let you move, rotate, and scale objects in 2D and 3D. This lesson introduces model, view, and projection matrices.",
    concept: "A 4x4 matrix can represent translation, rotation, and scale in homogeneous coordinates. Multiplying model, view, and projection matrices produces a transform that maps object-space vertices into clip space.",
    demo: { instructions: "Rotate a triangle in 3D using a model-view-projection matrix.", tip: "Use the Geometry Lab later to visualize each matrix." },
    code: { focus: "Matrix multiplication", explanation: "The `wgpu-matrix` library provides common matrix helpers. On the GPU, `mat4x4f` and matrix multiplication are fast and parallel." },
    exercise: { prompt: "Rotate the triangle 45 degrees around the Z axis.", starter: "mat4.rotateZ(model, Math.PI / 4, model);", solution: "mat4.rotateZ(model, Math.PI / 4, model);" },
    challenge: { prompt: "Build a small solar system: a central sun and a moon orbiting a planet.", hints: ["Use parent-child matrix composition.", "Upload each object's final matrix as a uniform.", "Draw multiple times with different uniforms."] },
    check: { question: "What order do you typically multiply M, V, and P?", options: [{ label: "M * V * P", correct: false }, { label: "P * V * M", correct: true }, { label: "V * M * P", correct: false }], explanation: "Column-major convention multiplies P * V * M to map from model space to clip space." },
    summary: ["Matrices encode translation, rotation, and scale.", "MVP = P * V * M maps objects to clip space.", "Matrix math is fast on the GPU."]
  },
  "ch6-coordinate-systems": {
    id: "ch6-coordinate-systems",
    title: "Coordinate Systems",
    estimatedMinutes: 18,
    overview: "Graphics programming uses several coordinate spaces. Understanding when and how to transform between them is essential.",
    concept: "Common spaces: local/model, world, view, clip, NDC, and screen. The vertex shader usually transforms from local to clip. The GPU then converts clip coordinates to normalized device coordinates (NDC) and finally to screen pixels.",
    demo: { instructions: "Visualize a grid and axes in world space.", tip: "Toggle grid and axis helpers in the viewport toolbar." },
    code: { focus: "Clip-space output", explanation: "A vertex shader's `@builtin(position)` output is in clip space. The GPU performs perspective divide to reach NDC, then viewport mapping to screen pixels." },
    exercise: { prompt: "Map a triangle from local coordinates (-1..1) to a smaller region in NDC.", starter: "output.Position = vec4f(position * 0.5, 1.0);", solution: "output.Position = vec4f(position * 0.5, 1.0);" },
    challenge: { prompt: "Implement a simple orthographic projection matrix by hand.", hints: ["Scale X and Y by 1 / (right - left).", "Translate to center the view.", "Ignore perspective divide for orthographic."] },
    check: { question: "Which space comes after clip space in the GPU pipeline?", options: [{ label: "World space", correct: false }, { label: "Normalized device coordinates", correct: true }, { label: "Local space", correct: false }], explanation: "The GPU divides clip coordinates by W to produce NDC." },
    summary: ["Vertices travel through local, world, view, clip, NDC, and screen spaces.", "The vertex shader outputs clip-space positions.", "Perspective divide converts clip to NDC."]
  },
  "ch7-textures": {
    id: "ch7-textures",
    title: "Textures",
    estimatedMinutes: 25,
    overview: "Textures are images stored on the GPU. Combined with samplers, they let fragment shaders read color data per pixel.",
    concept: "A texture holds texel data. A sampler defines filtering and wrapping behavior. In WGSL you declare them with `@group(0) @binding(...)` and sample with `textureSample`. Bind groups connect the JavaScript texture and sampler objects to the shader.",
    demo: { instructions: "The Preview panel shows a textured cube rotating in 3D. The fragment shader multiplies the sampled texture color by the interpolated vertex color.", tip: "Try editing the UV coordinates or the sampling call." },
    code: { focus: "sampleTextureMixColor.frag.wgsl", explanation: "`textureSample(myTexture, mySampler, fragUV)` reads the texture at the interpolated UV coordinate. The result is multiplied by `fragPosition` to tint the cube." },
    exercise: { prompt: "Flip the texture vertically by modifying the UV in the vertex shader.", starter: "output.fragUV = uv;", solution: "output.fragUV = vec2f(uv.x, 1.0 - uv.y);" },
    challenge: { prompt: "Create a scrolling texture effect using a time uniform.", hints: ["Add a time uniform to the bind group.", "Offset UV.x by time.", "Use fract or wrap sampling."] },
    check: { question: "What does a sampler control?", options: [{ label: "Pixel color values", correct: false }, { label: "Filtering and wrapping", correct: true }, { label: "Buffer stride", correct: false }], explanation: "Samplers control how texture coordinates are filtered and wrapped." },
    summary: ["Textures store image data on the GPU.", "Samplers define filtering and wrapping.", "`textureSample` reads texture data in fragment shaders."]
  },
  "ch8-lighting": {
    id: "ch8-lighting",
    title: "Lighting",
    estimatedMinutes: 28,
    overview: "Basic lighting gives 3D objects shape. This lesson covers normals and the classic diffuse lighting model.",
    concept: "A normal is a direction perpendicular to a surface. Diffuse lighting depends on the angle between the surface normal and the light direction. The dot product of these vectors determines how bright the surface appears.",
    demo: { instructions: "A rotating cube is lit by a directional light. Notice how faces brighten and darken as they turn toward the light.", tip: "Toggle normals in the viewport to see per-face directions." },
    code: { focus: "Normal transformation", explanation: "Normals must be transformed by the inverse-transpose of the model matrix to stay correct under non-uniform scale." },
    exercise: { prompt: "Change the light direction to come from above instead of the side.", starter: "let lightDir = vec3f(1.0, 0.0, 0.0);", solution: "let lightDir = vec3f(0.0, 1.0, 0.0);" },
    challenge: { prompt: "Add ambient light so unlit faces are not completely black.", hints: ["Combine diffuse and ambient terms.", "Ambient is a small constant color.", "Clamp the final color to valid range."] },
    check: { question: "What does the dot product of normal and light direction give you?", options: [{ label: "Texture coordinates", correct: false }, { label: "Diffuse intensity", correct: true }, { label: "Specular highlight", correct: false }], explanation: "Lambert's diffuse term is `max(dot(N, L), 0.0)`." },
    summary: ["Normals describe surface orientation.", "Diffuse lighting uses the dot product of normal and light direction.", "Normals must be transformed correctly under scale."]
  },
  "ch9-model-loading": {
    id: "ch9-model-loading",
    title: "Model Loading",
    estimatedMinutes: 30,
    overview: "Real scenes use artist-authored models. This lesson covers parsing simple mesh data and uploading it to the GPU.",
    concept: "Model formats like OBJ and glTF store vertex positions, normals, UVs, and indices. At runtime you parse this data into GPU buffers and bind groups.",
    demo: { instructions: "Render a loaded model (Stanford Bunny placeholder) with normals.", tip: "Check the GPU Inspector for vertex and triangle counts." },
    code: { focus: "Vertex attribute layout for loaded models", explanation: "Loaded models often have positions, normals, and UVs interleaved. The pipeline must match that exact layout." },
    exercise: { prompt: "Parse an OBJ file string and extract vertex positions.", starter: "lines.filter(line => line.startsWith('v '))", solution: "positions = lines.filter(l => l.startsWith('v ')).map(l => l.split(' ').slice(1).map(Number));" },
    challenge: { prompt: "Load a glTF model and display its material texture.", hints: ["Use a glTF loader library.", "Upload buffer views as GPU buffers.", "Handle images as textures."] },
    check: { question: "Which format stores scenes, materials, and animations?", options: [{ label: "OBJ", correct: false }, { label: "glTF", correct: true }, { label: "PNG", correct: false }], explanation: "glTF is a modern format designed for runtime 3D assets." },
    summary: ["Models are parsed into vertex/index buffers.", "OBJ is simple but limited; glTF is full-featured.", "Pipeline layouts must match model vertex data."]
  },
  "ch10-instancing": {
    id: "ch10-instancing",
    title: "Instancing",
    estimatedMinutes: 22,
    overview: "Instancing draws many copies of the same geometry with one draw call, each with different transformation data.",
    concept: "Instead of issuing thousands of draw calls, instancing uses one draw call with a per-instance attribute or instance index. The vertex shader reads the instance-specific data and applies a transform.",
    demo: { instructions: "Render a grid of 100 rotating cubes with a single draw call.", tip: "Open the Performance panel to see draw calls stay low." },
    code: { focus: "Instance attributes", explanation: "Per-instance data is stored in a second vertex buffer with `stepMode: 'instance'`. The GPU advances this buffer once per instance, not per vertex." },
    exercise: { prompt: "Add an instance buffer with 16 transform matrices and draw 16 cubes.", starter: "pass.setVertexBuffer(1, instanceBuffer);", solution: "pass.draw(cubeVertexCount, 16, 0, 0);" },
    challenge: { prompt: "Create a particle field using instanced quads and a compute shader for movement.", hints: ["Store particle state in a storage buffer.", "Use `instance_index` in the vertex shader.", "Animate with time."] },
    check: { question: "What is the main performance benefit of instancing?", options: [{ label: "Better texture quality", correct: false }, { label: "Fewer draw calls", correct: true }, { label: "Smaller shaders", correct: false }], explanation: "Instancing reduces CPU overhead by batching many objects into one draw call." },
    summary: ["Instancing draws many copies with one call.", "Per-instance data is read via instance attributes.", "Great for particles, grass, crowds, and repeated geometry."]
  },
  "ch11-shadow-mapping": {
    id: "ch11-shadow-mapping",
    title: "Shadow Mapping",
    estimatedMinutes: 35,
    overview: "Shadow mapping is the standard real-time shadow technique. This lesson explains the two-pass shadow algorithm.",
    concept: "First, render the scene from the light's point of view into a depth texture. Second, render from the camera and compare each pixel's light-space depth to the stored depth to determine if it is shadowed.",
    demo: { instructions: "A textured cube casts a simple shadow onto a ground plane.", tip: "Switch to the depth debug view to see the shadow map." },
    code: { focus: "Depth texture render pass", explanation: "The shadow pass uses a `depthStencilAttachment` with a `RENDER_ATTACHMENT` texture and no color attachment." },
    exercise: { prompt: "Create a depth texture sized 1024x1024 for the shadow pass.", starter: "device.createTexture({ size: [1024, 1024], format: 'depth24plus', usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING })", solution: "Same as starter." },
    challenge: { prompt: "Add percentage-closer filtering (PCF) for softer shadows.", hints: ["Sample the depth texture multiple times.", "Average the binary shadow tests.", "Use a small offset kernel."] },
    check: { question: "How many render passes does basic shadow mapping require?", options: [{ label: "One", correct: false }, { label: "Two", correct: true }, { label: "Four", correct: false }], explanation: "One pass from the light to create the shadow map, and one from the camera to render with shadows." },
    summary: ["Shadow mapping uses a depth pass from the light.", "Camera pass compares light-space depth to the shadow map.", "PCF softens hard shadow edges."]
  },
  "ch12-post-processing": {
    id: "ch12-post-processing",
    title: "Post Processing",
    estimatedMinutes: 28,
    overview: "Post-processing applies fullscreen effects after the main render. Common examples are bloom, tone mapping, and color grading.",
    concept: "Instead of presenting the scene directly, render it to an intermediate texture. Then draw a fullscreen triangle with a fragment shader that reads that texture and applies effects.",
    demo: { instructions: "Apply a simple color inversion or vignette to the rendered scene.", tip: "The Pipeline panel will show the extra fullscreen pass." },
    code: { focus: "Fullscreen triangle pass", explanation: "A fullscreen pass uses a triangle large enough to cover clip space (-1..1). The fragment shader samples the scene texture with UVs derived from position." },
    exercise: { prompt: "Write a fragment shader that inverts the scene colors.", starter: "return textureSample(sceneTex, sampler, uv);", solution: "return vec4f(1.0 - color.rgb, color.a);" },
    challenge: { prompt: "Implement a two-pass Gaussian blur.", hints: ["Render scene to a texture.", "Blur horizontally into another texture.", "Blur vertically back into the first or to screen."] },
    check: { question: "What does a fullscreen post-processing pass sample?", options: [{ label: "The backbuffer directly", correct: false }, { label: "A previously rendered scene texture", correct: true }, { label: "The depth buffer only", correct: false }], explanation: "Post-processing reads from a render target texture produced by the main scene pass." },
    summary: ["Post-processing runs after the main render.", "Render to an intermediate texture first.", "Full-screen shaders apply effects like bloom and blur."]
  },
  "ch13-particles": {
    id: "ch13-particles",
    title: "Particles",
    estimatedMinutes: 30,
    overview: "Particles add life to scenes. This lesson covers a simple particle system using compute shaders for movement.",
    concept: "Particle state (position, velocity, life) is stored in GPU buffers. A compute shader updates those buffers each frame. An instanced draw renders thousands of quads using the updated state.",
    demo: { instructions: "A fountain of particles rises and falls under simulated gravity.", tip: "Toggle the compute stage in the Pipeline panel." },
    code: { focus: "Compute shader dispatch", explanation: "`pass.dispatchWorkgroups(count)` runs the compute shader in workgroup-sized chunks. Storage buffers are read and written in the same pass with proper barriers." },
    exercise: { prompt: "Add a velocity uniform for gravity and update particle positions.", starter: "particle.pos += particle.vel * deltaTime;", solution: "particle.vel.y -= gravity * deltaTime; particle.pos += particle.vel * deltaTime;" },
    challenge: { prompt: "Spawn new particles at the emitter position when old ones die.", hints: ["Track remaining life per particle.", "Reset dead particles with random velocity.", "Use a pseudo-random hash in WGSL."] },
    check: { question: "Which shader stage is best for updating particle positions on the GPU?", options: [{ label: "Vertex shader", correct: false }, { label: "Fragment shader", correct: false }, { label: "Compute shader", correct: true }], explanation: "Compute shaders are ideal for parallel state updates like particle movement." },
    summary: ["Particles use GPU buffers for state.", "Compute shaders update state in parallel.", "Instancing renders many particles efficiently."]
  },
  "ch14-compute-shaders": {
    id: "ch14-compute-shaders",
    title: "Compute Shaders",
    estimatedMinutes: 32,
    overview: "Compute shaders run general-purpose parallel work on the GPU. They are not tied to rendering geometry.",
    concept: "A compute shader is invoked in a grid of workgroups, each containing a set of local invocations. They read from and write to storage buffers and textures.",
    demo: { instructions: "A compute shader generates a procedural texture or performs parallel reduction.", tip: "Check the Performance panel to see GPU time." },
    code: { focus: "Storage buffers in WGSL", explanation: "`var<storage, read_write>` gives compute shaders random-access read/write access to buffer data." },
    exercise: { prompt: "Write a compute shader that doubles every value in a storage buffer.", starter: "@compute @workgroup_size(64) fn main(@builtin(global_invocation_id) id: vec3u) {", solution: "buffer[id.x] *= 2.0;" },
    challenge: { prompt: "Implement a simple image blur using a compute shader.", hints: ["Use a storage texture for output.", "Sample neighbors from an input texture.", "Average the samples."] },
    check: { question: "What WGSL address space is used for read/write GPU buffers?", options: [{ label: "uniform", correct: false }, { label: "storage", correct: true }, { label: "workgroup", correct: false }], explanation: "`var<storage, read_write>` declares a storage buffer." },
    summary: ["Compute shaders run parallel general-purpose work.", "They use workgroups and storage buffers.", "Common uses include particles, simulation, and image processing."]
  },
  "ch15-optimization": {
    id: "ch15-optimization",
    title: "Optimization",
    estimatedMinutes: 25,
    overview: "Performance is part of the product. This lesson covers the metrics and techniques that make WebGPU applications fast.",
    concept: "Key optimizations: minimize descriptor set changes, batch draw calls, use instancing, upload data efficiently, reduce shader complexity, and avoid CPU/GPU synchronization stalls.",
    demo: { instructions: "Compare two rendering approaches in the Performance panel: naive one-draw-per-object versus instanced batched rendering.", tip: "Watch draw calls and frame time change." },
    code: { focus: "Pipeline state reuse", explanation: "Changing pipelines or bind groups is expensive. Sort draws by pipeline and material to reduce state changes." },
    exercise: { prompt: "Group 100 cube draws by material and issue them with one pipeline state.", starter: "for (const mat of materials) { pass.setPipeline(mat.pipeline); ... }", solution: "Sort objects by pipeline, then bind group, then draw." },
    challenge: { prompt: "Profile a scene and identify the bottleneck using the Performance panel.", hints: ["Check if CPU or GPU time is higher.", "Look at draw call count.", "Use the Pipeline panel to spot redundant state changes."] },
    check: { question: "Which usually hurts performance more on modern GPUs?", options: [{ label: "Too many draw calls", correct: true }, { label: "Too many triangles in one mesh", correct: false }, { label: "Large textures", correct: false }], explanation: "CPU overhead from many draw calls is a common bottleneck; modern GPUs handle large meshes well." },
    summary: ["Batch draws and reuse pipeline state.", "Instancing reduces draw call overhead.", "Profile CPU vs GPU time to find bottlenecks."]
  }
};

export function getLessonContent(id: LessonId): LessonContent {
  return lessonContents[id] ?? lessonContents.intro;
}
