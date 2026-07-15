export interface ShaderExample {
  id: string;
  name: string;
  tags: string[];
  description: string;
  vertex: string;
  fragment: string;
}

const defaultVertex = `@vertex
fn main(@builtin(vertex_index) idx: u32) -> @builtin(position) vec4f {
  let pos = array<vec2f, 3>(
    vec2f(-1.0, -1.0),
    vec2f( 3.0, -1.0),
    vec2f(-1.0,  3.0)
  );
  return vec4f(pos[idx], 0.0, 1.0);
}
`;

export const shaderExamples: ShaderExample[] = [
  {
    id: "gradient",
    name: "Gradient",
    tags: ["2D", "color", "beginner"],
    description: "A smooth linear gradient across the UV space.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  return vec4f(fragUV.x, fragUV.y, 0.5, 1.0);
}
`
  },
  {
    id: "rainbow",
    name: "Rainbow",
    tags: ["2D", "color", "hsv"],
    description: "A hue cycle computed from the UV angle.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let centered = fragUV - 0.5;
  let angle = atan2(centered.y, centered.x) / 6.28318530718;
  let hue = fract(angle + 0.5);
  let c = vec3f(1.0) - abs(fract(vec3f(hue, hue, hue) + vec3f(0.0, 0.3333, 0.6666)) * 2.0 - 1.0);
  return vec4f(c, 1.0);
}
`
  },
  {
    id: "glass",
    name: "Glass",
    tags: ["2D", "refraction", "effect"],
    description: "A frosted glass distortion using high-frequency noise offsets.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let n = fract(sin(dot(fragUV * 800.0, vec2f(12.9898, 78.233))) * 43758.5453);
  let fog = 0.85 + n * 0.15;
  return vec4f(vec3f(fog), 0.55);
}
`
  },
  {
    id: "fire",
    name: "Fire",
    tags: ["2D", "noise", "effect"],
    description: "A procedural scrolling fire using layered noise and a warm palette.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let noise = fract(sin(dot(fragUV * 20.0, vec2f(12.9898, 78.233))) * 43758.5453);
  let heat = smoothstep(0.2, 1.0, fragUV.y + noise * 0.15);
  let color = mix(vec3f(1.0, 0.2, 0.0), vec3f(1.0, 0.8, 0.1), heat);
  return vec4f(color * heat, 1.0);
}
`
  },
  {
    id: "water",
    name: "Water",
    tags: ["2D", "ripple", "effect"],
    description: "Sine-based ripples that simulate moving water lines.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let wave = sin(fragUV.x * 40.0 + fragUV.y * 30.0) * 0.5 + 0.5;
  let color = mix(vec3f(0.0, 0.2, 0.5), vec3f(0.0, 0.6, 0.9), wave);
  return vec4f(color, 1.0);
}
`
  },
  {
    id: "noise",
    name: "Noise",
    tags: ["2D", "procedural", "beginner"],
    description: "Simple value noise based on UV hash. Useful for dithering and grain.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let n = fract(sin(dot(fragUV * 800.0, vec2f(12.9898, 78.233) * 2.0)) * 43758.5453);
  return vec4f(vec3f(n), 1.0);
}
`
  },
  {
    id: "aurora",
    name: "Aurora",
    tags: ["2D", "effect", "color"],
    description: "Layered sine waves producing an aurora-like glowing band.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let band = sin(fragUV.x * 10.0 + fragUV.y * 4.0) * 0.5 + 0.5;
  let glow = pow(band, 3.0);
  let color = mix(vec3f(0.05, 0.1, 0.2), vec3f(0.2, 0.9, 0.6), glow);
  return vec4f(color, 1.0);
}
`
  },
  {
    id: "crt",
    name: "CRT",
    tags: ["2D", "retro", "post-process"],
    description: "Scanlines and a slight green tint typical of CRT displays.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let scan = step(0.5, fract(fragUV.y * 40.0));
  let tint = vec3f(0.1, 0.9, 0.2) * scan;
  return vec4f(tint, 1.0);
}
`
  },
  {
    id: "pixelate",
    name: "Pixelation",
    tags: ["2D", "effect", "post-process"],
    description: "A blocky pixelation effect achieved by snapping UVs to a grid.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let pixel = 32.0;
  let snapped = floor(fragUV * pixel) / pixel;
  return vec4f(snapped.x, snapped.y, 0.4, 1.0);
}
`
  },
  {
    id: "bloom",
    name: "Bloom",
    tags: ["2D", "glow", "post-process"],
    description: "A bright core with radial falloff demonstrating a glow pass.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let d = length(fragUV - 0.5) * 1.25;
  var glow = 1.0 - d;
  glow = pow(max(glow, 0.0), 1.5);
  return vec4f(vec3f(glow * 2.0, glow * 1.25, glow * 0.6), 1.0);
}
`
  },
  {
    id: "outline",
    name: "Outline",
    tags: ["2D", "edge", "effect"],
    description: "An inverted-corner outline mask using distance fields.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let uv = (fragUV - 0.5) * 2.0;
  let d = abs(length(uv) - 0.7);
  let edge = smoothstep(0.05, 0.0, d);
  return vec4f(vec3f(edge), 1.0);
}
`
  },
  {
    id: "toon",
    name: "Toon",
    tags: ["3D", "cel", "lighting"],
    description: "A stepped cel-shading ramp useful for toon rendering.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let band = floor(fragUV.x * 6.0) / 6.0;
  return vec4f(vec3f(band), 1.0);
}
`
  },
  {
    id: "hologram",
    name: "Hologram",
    tags: ["3D", "effect", "sci-fi"],
    description: "A flickering cyan hologram with scanline bands and alpha falloff.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let band = sin(fragUV.y * 40.0 + fragUV.x * 20.0) * 0.5 + 0.5;
  let alpha = 0.35 + band * 0.35;
  return vec4f(0.2, 0.9, 1.0, alpha);
}
`
  },
  {
    id: "metal",
    name: "Metal",
    tags: ["3D", "material", "lighting"],
    description: "A brushed-metal specular highlight approximation.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let shine = pow(max(1.0 - length(fragUV - 0.5) * 2.0, 0.0), 4.0);
  let base = vec3f(0.45, 0.5, 0.55);
  return vec4f(base + shine, 1.0);
}
`
  },
  {
    id: "pbr",
    name: "PBR",
    tags: ["3D", "material", "lighting"],
    description: "A simplified metallic-roughness sphere with a Fresnel rim.",
    vertex: defaultVertex,
    fragment: `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  let uv = (fragUV - 0.5) * 2.0;
  let rim = 1.0 - length(uv);
  let metal = vec3f(0.56, 0.57, 0.58);
  let color = metal + rim * 0.4;
  return vec4f(color, 1.0);
}
`
  }
];

export function getShaderExample(id: string): ShaderExample | undefined {
  return shaderExamples.find((s) => s.id === id);
}
