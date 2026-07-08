import { createTwoCubesDemo } from "./samples/two-cubes/main";
import { createHelloTriangleDemo } from "./samples/hello-triangle/main";
import { createTexturedCubeDemo } from "./samples/textured-cube/main";
import { createGeometryMeshDemo } from "./samples/geometry-lab/main";
import type { DemoInstance, RenderStats } from "./types";
import { useMetricsStore } from "@/lib/stores/metrics-store";
import type { GeometryShapeId } from "@/lib/stores/geometry-store";

export type WebGpuSampleId = "textured-cube" | "hello-triangle" | "two-cubes";
export type ShapeId = WebGpuSampleId | GeometryShapeId;

type ShapeMeta = {
  id: ShapeId;
  label: string;
  description: string;
  localPath: string;
  source: {
    title: string;
    url: string;
  };
};

export const availableShapes: ShapeMeta[] = [
  {
    id: "hello-triangle",
    label: "Hello Triangle",
    description:
      "Baseline WebGPU pipeline inspired by the official Hello Triangle sample. Demonstrates vertex buffers, shaders, and render loop fundamentals (see samples/hello-triangle/main.ts).",
    localPath: "samples/hello-triangle/main.ts",
    source: {
      title: "WebGPU Samples — Hello Triangle",
      url: "https://webgpu.github.io/webgpu-samples/?sample=helloTriangle"
    }
  },
  {
    id: "two-cubes",
    label: "Two Cubes",
    description:
      "Port of the WebGPU twoCubes sample. Demonstrates multiple draw calls and distinct uniform buffers per object.",
    localPath: "samples/two-cubes/main.ts",
    source: {
      title: "WebGPU Samples — Two Cubes",
      url: "https://webgpu.github.io/webgpu-samples/?sample=twoCubes"
    }
  },
  {
    id: "textured-cube",
    label: "Textured Cube",
    description:
      "Port of the WebGPU texturedCube sample. Demonstrates textured geometry, rotating model matrices, and uniform updates each frame (see samples/textured-cube/main.ts).",
    localPath: "samples/textured-cube/main.ts",
    source: {
      title: "WebGPU Samples — Textured Cube",
      url: "https://webgpu.github.io/webgpu-samples/?sample=texturedCube"
    }
  },
  {
    id: "triangle",
    label: "Geometry Triangle",
    description: "Interactive Geometry Lab mesh rendered by the shared WebGPU viewport.",
    localPath: "samples/geometry-lab/main.ts",
    source: {
      title: "WebGPU Lab — Geometry Mesh Renderer",
      url: "#geometry-lab"
    }
  },
  {
    id: "quad",
    label: "Geometry Quad",
    description: "Indexed quad mesh rendered by the shared WebGPU viewport.",
    localPath: "samples/geometry-lab/main.ts",
    source: {
      title: "WebGPU Lab — Geometry Mesh Renderer",
      url: "#geometry-lab"
    }
  },
  {
    id: "cube",
    label: "Geometry Cube",
    description: "Indexed cube mesh controlled from the Geometry Lab.",
    localPath: "samples/geometry-lab/main.ts",
    source: {
      title: "WebGPU Lab — Geometry Mesh Renderer",
      url: "#geometry-lab"
    }
  },
  {
    id: "sphere",
    label: "Geometry Sphere",
    description: "Generated UV sphere mesh controlled from the Geometry Lab.",
    localPath: "samples/geometry-lab/main.ts",
    source: {
      title: "WebGPU Lab — Geometry Mesh Renderer",
      url: "#geometry-lab"
    }
  },
  {
    id: "plane",
    label: "Geometry Plane",
    description: "Subdividable plane mesh controlled from the Geometry Lab.",
    localPath: "samples/geometry-lab/main.ts",
    source: {
      title: "WebGPU Lab — Geometry Mesh Renderer",
      url: "#geometry-lab"
    }
  },
  {
    id: "cylinder",
    label: "Geometry Cylinder",
    description: "Generated capped cylinder mesh controlled from the Geometry Lab.",
    localPath: "samples/geometry-lab/main.ts",
    source: {
      title: "WebGPU Lab — Geometry Mesh Renderer",
      url: "#geometry-lab"
    }
  },
  {
    id: "cone",
    label: "Geometry Cone",
    description: "Generated cone mesh controlled from the Geometry Lab.",
    localPath: "samples/geometry-lab/main.ts",
    source: {
      title: "WebGPU Lab — Geometry Mesh Renderer",
      url: "#geometry-lab"
    }
  },
  {
    id: "torus",
    label: "Geometry Torus",
    description: "Generated torus mesh controlled from the Geometry Lab.",
    localPath: "samples/geometry-lab/main.ts",
    source: {
      title: "WebGPU Lab — Geometry Mesh Renderer",
      url: "#geometry-lab"
    }
  },
  {
    id: "monkey",
    label: "Monkey Proxy Mesh",
    description: "A Suzanne-style proxy mesh assembled from generated primitives for topology practice.",
    localPath: "samples/geometry-lab/main.ts",
    source: {
      title: "WebGPU Lab — Geometry Mesh Renderer",
      url: "#geometry-lab"
    }
  },
  {
    id: "bunny",
    label: "Bunny Proxy Mesh",
    description: "A bunny-style proxy mesh assembled from generated primitives for topology practice.",
    localPath: "samples/geometry-lab/main.ts",
    source: {
      title: "WebGPU Lab — Geometry Mesh Renderer",
      url: "#geometry-lab"
    }
  }
];

type DemoResult =
  | {
      status: "ready";
      cleanup: () => void;
      setShape: (shapeId: ShapeId, shaders?: ShaderOverrides) => Promise<void>;
      setShaders: (shapeId: ShapeId, shaders: ShaderOverrides) => Promise<void>;
      getStats: () => RenderStats;
      getShape: () => ShapeMeta;
    }
  | { status: "unsupported"; message: string }
  | { status: "error"; message: string; cause?: unknown };

export type ShaderOverrides = {
  vertexShader?: string;
  fragmentShader?: string;
};

export async function initTriangleDemo(
  canvas: HTMLCanvasElement,
  titleElement: HTMLElement | null
): Promise<DemoResult> {
  try {
    if (typeof navigator === "undefined" || !("gpu" in navigator)) {
      const message = "WebGPU is not supported in this browser.";
      updateTitle(titleElement, message);
      return { status: "unsupported", message };
    }

    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      const message = "No adapter is available for WebGPU.";
      updateTitle(titleElement, message);
      return { status: "unsupported", message };
    }

    const device = await adapter.requestDevice();
    const context = canvas.getContext("webgpu") as GPUCanvasContext | null;

    if (!context) {
      const message = "Unable to initialize WebGPU context.";
      updateTitle(titleElement, message);
      return { status: "error", message };
    }

    const format = navigator.gpu.getPreferredCanvasFormat();
    const configureContext = () =>
      configureCanvasContext({
        canvas,
        context,
        device,
        format
      });

    let { width: canvasWidth, height: canvasHeight } = configureContext();

    let depthTexture: GPUTexture | null = null;
    let depthView: GPUTextureView | null = null;
    let animationFrame: number | undefined;
    let currentDemo: DemoInstance | null = null;
    let currentShape = availableShapes[0]!;
    let requestedShape: ShapeId = currentShape.id;
    let loadingShape: Promise<void> | null = null;

    const ensureDepthResources = () => {
      depthTexture?.destroy();
      depthTexture = device.createTexture({
        size: { width: canvasWidth, height: canvasHeight },
        format: "depth24plus",
        usage: GPUTextureUsage.RENDER_ATTACHMENT
      });
      depthView = depthTexture.createView();
    };

    const observer = new ResizeObserver(() => {
      const size = configureContext();
      canvasWidth = size.width;
      canvasHeight = size.height;
      currentDemo?.resize(size.width, size.height);
      if (currentDemo?.requiresDepth) {
        ensureDepthResources();
      }
    });

    observer.observe(canvas);

    let currentShaders: ShaderOverrides = {};

    const setShape = (shapeId: ShapeId, shaders: ShaderOverrides = {}) => {
      requestedShape = shapeId;
      currentShaders = shaders;

      const load = (async () => {
        const nextShape =
          availableShapes.find((shape) => shape.id === shapeId) ?? availableShapes[0]!;

        const newDemo = await createDemoInstance(nextShape.id, device, format, shaders);

        if (requestedShape !== shapeId) {
          newDemo.dispose();
          return;
        }

        currentDemo?.dispose();
        currentDemo = newDemo;
        currentShape = nextShape;

        currentDemo.resize(canvasWidth, canvasHeight);
        if (currentDemo.requiresDepth) {
          ensureDepthResources();
        } else {
          depthTexture?.destroy();
          depthTexture = null;
          depthView = null;
        }

        updateTitle(titleElement, `WebGPU Demo — ${nextShape.label}`);
      })().catch((error) => {
        console.error("Failed to load WebGPU shape", error);
        if (requestedShape === shapeId) {
          updateTitle(
            titleElement,
            error instanceof Error ? error.message : "Failed to load WebGPU shape."
          );
        }
      });

      loadingShape = load.finally(() => {
        if (loadingShape === load) {
          loadingShape = null;
        }
      });

      return load;
    };

    const setShaders = (shapeId: ShapeId, shaders: ShaderOverrides) => {
      return setShape(shapeId, shaders);
    };

    let frameStats: RenderStats = { drawCalls: 0, vertices: 0, triangles: 0 };
    let frameCount = 0;

    const frame = (timestamp: number) => {
      const demo = currentDemo;
      if (!demo) {
        animationFrame = requestAnimationFrame(frame);
        return;
      }

      const encoder = device.createCommandEncoder();
      const textureView = context.getCurrentTexture().createView();

      demo.update(timestamp);

      const passDescriptor: GPURenderPassDescriptor = {
        colorAttachments: [
          {
            view: textureView,
            clearValue: demo.clearColor,
            loadOp: "clear",
            storeOp: "store"
          }
        ]
      };

      if (demo.requiresDepth && depthView) {
        passDescriptor.depthStencilAttachment = {
          view: depthView,
          depthClearValue: 1,
          depthLoadOp: "clear",
          depthStoreOp: "store"
        };
      }

      const pass = encoder.beginRenderPass(passDescriptor);
      demo.render(pass);
      pass.end();

      frameStats = demo.getStats();

      device.queue.submit([encoder.finish()]);

      if (frameCount % 2 === 0) {
        useMetricsStore.getState().updateMetrics({
          drawCalls: frameStats.drawCalls,
          vertices: frameStats.vertices,
          triangles: frameStats.triangles
        });
        useMetricsStore.getState().pulseFrame();
      }
      frameCount += 1;

      animationFrame = requestAnimationFrame(frame);
    };

    setShape(currentShape.id);
    animationFrame = requestAnimationFrame(frame);

    const cleanup = () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
      depthTexture?.destroy();
      currentDemo?.dispose();
    };

    return {
      status: "ready",
      cleanup,
      setShape,
      setShaders,
      getStats: () => frameStats,
      getShape: () => currentShape
    };
  } catch (error) {
    console.error("WebGPU demo failed to initialise", error);
    const message =
      error instanceof Error ? error.message : "Unexpected WebGPU initialisation error.";
    updateTitle(titleElement, message);
    return { status: "error", message, cause: error };
  }
}

function updateTitle(titleElement: HTMLElement | null, message: string) {
  if (titleElement) {
    titleElement.textContent = message;
  }
}

function configureCanvasContext({
  canvas,
  context,
  device,
  format
}: {
  canvas: HTMLCanvasElement;
  context: GPUCanvasContext;
  device: GPUDevice;
  format: GPUTextureFormat;
}) {
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, Math.floor(rect.width * dpr));
  const height = Math.max(1, Math.floor(rect.height * dpr));

  canvas.width = width;
  canvas.height = height;
  canvas.style.width = "100%";
  canvas.style.height = "100%";

  context.configure({
    device,
    format,
    alphaMode: "opaque",
    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC
  });

  return { width, height };
}

async function createDemoInstance(
  id: ShapeId,
  device: GPUDevice,
  format: GPUTextureFormat,
  shaders: ShaderOverrides = {}
): Promise<DemoInstance> {
  switch (id) {
    case "two-cubes":
      return createTwoCubesDemo(device, format, shaders);
    case "textured-cube":
      return createTexturedCubeDemo(device, format, shaders);
    case "hello-triangle":
      return createHelloTriangleDemo(device, format, shaders);
    default:
      return createGeometryMeshDemo(device, format, id, shaders);
  }
}
