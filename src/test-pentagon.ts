import pentagonVertWGSL from './shaders/pentagon.vert.wgsl';
import fragWGSL from './shaders/red.frag.wgsl';

export default function init(
  context: GPUCanvasContext,
  device: GPUDevice
): void {
  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();

  // Configure the canvas
  context.configure({
    device,
    format: presentationFormat,
    alphaMode: 'opaque',
  });

  // Create the render pipeline
  const pipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
      module: device.createShaderModule({
        code: pentagonVertWGSL,
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
      topology: 'triangle-list', // Topology for discrete triangles
    },
  });

  // Render loop
  function frame() {
    const commandEncoder = device.createCommandEncoder();
    const textureView = context.getCurrentTexture().createView();

    const renderPassDescriptor: GPURenderPassDescriptor = {
      colorAttachments: [
        {
          view: textureView,
          clearValue: { r: 0.1, g: 0.3, b: 0.3, a: 1.0 }, // Background color
          loadOp: 'clear',
          storeOp: 'store',
        },
      ],
    };

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.draw(15, 1, 0, 0); // 15 vertices to draw the pentagon
    passEncoder.end();

    device.queue.submit([commandEncoder.finish()]);
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}