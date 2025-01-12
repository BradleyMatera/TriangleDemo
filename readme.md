# Leaf-js

## Required Information

- [webgl reference](https://gpuweb.github.io/gpuweb/)
- [webgpu mdn docs](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)
- [wgsl shading lang](https://www.w3.org/TR/WGSL/)

> NOTE: wgsl is basically glsl with some small viritual math differences.

## Adding New Shapes to the WebGPU Project

### Step 1: Create the Vertex Shader

1. Navigate to the shaders directory
2. Create a new file named `<shape>.vert.wgsl` (replace `<shape>` with your shape's name, e.g., `pentagon.vert.wgsl`)
3. Write the vertex shader logic. The vertex shader should define the vertices of the shape. For example:

```wgsl
@vertex
fn main(
  @builtin(vertex_index) VertexIndex : u32
) -> @builtin(position) vec4<f32> {
  var pos = array<vec2<f32>, NUM_VERTICES>(
    // Define your vertices here
    vec2(0.0, 0.0), // Example vertex
    ...
  );
  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);
}
```

- Replace `NUM_VERTICES` with the total number of vertices for the shape
- Make sure the vertices form the desired shape using the correct topology

### Step 2: Create the Fragment Shader

1. If the shape requires a unique fragment shader, create a new file named `<shape>.frag.wgsl` in the shaders directory
2. If the existing `red.frag.wgsl` is sufficient, reuse it

### Step 3: Add the Shape Initialization Logic

1. Create a new file in the root directory (e.g., `test-<shape>.ts`)
2. Add the following logic to initialize and render the shape:

```typescript
import shapeVertWGSL from './shaders/<shape>.vert.wgsl';
import fragWGSL from './shaders/red.frag.wgsl'; // Or your custom fragment shader

export default function init(
  context: GPUCanvasContext,
  device: GPUDevice
): void {
  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
    device,
    format: presentationFormat,
    alphaMode: 'opaque',
  });

  const pipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
      module: device.createShaderModule({
        code: shapeVertWGSL,
      }),
      entryPoint: 'main',
    },
    fragment: {
      module: device.createShaderModule({
        code: fragWGSL,
      }),
      entryPoint: 'main',
      targets: [
        {
          format: presentationFormat,
        },
      ],
    },
    primitive: {
      topology: 'triangle-list', // Update this if using a different topology
    },
  });

  function frame() {
    const commandEncoder = device.createCommandEncoder();
    const textureView = context.getCurrentTexture().createView();

    const renderPassDescriptor: GPURenderPassDescriptor = {
      colorAttachments: [
        {
          view: textureView,
          clearValue: { r: 0.1, g: 0.3, b: 0.3, a: 1.0 },
          loadOp: 'clear',
          storeOp: 'store',
        },
      ],
    };

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.draw(NUM_VERTICES, 1, 0, 0); // Replace NUM_VERTICES with your vertex count
    passEncoder.end();

    device.queue.submit([commandEncoder.finish()]);
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
```

### Step 4: Update the Main File

1. Open `main.ts`
2. Import the new shape initialization function:

```typescript
import init<Shape> from './test-<shape>';
```

Replace `<Shape>` with the shape name (e.g., `initPentagon`).

3. Add the new shape to the commented-out testing section:

```typescript
// Uncomment one of the following lines to test a specific shape:
initTriangle(context, device); // Test Triangle
// init<Shape>(context, device); // Test Your Shape
```

### Step 5: Test the Shape

1. Uncomment the initialization line for your new shape in `main.ts`
2. Run the project
3. Verify the shape renders correctly on the canvas

### Example: Adding a Pentagon

1. Create the Vertex Shader: Add `pentagon.vert.wgsl` to `shaders/` and define the pentagon's vertices
2. Reuse the Fragment Shader: Use `red.frag.wgsl` for coloring
3. Create the Initialization Logic: Add `test-pentagon.ts` and set up the render pipeline
4. Update `main.ts`: Import `initPentagon` and test it by uncommenting its call

This process ensures consistency across all shapes and simplifies future additions.