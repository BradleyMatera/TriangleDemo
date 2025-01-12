import './style.css';
import initTriangle from './test-triangle';
import initSquare from './test-square';
import initPentagon from './test-pentagon';
import initDiamond from './test-diamond';
import initHexagon from './test-hexagon';
import { assert } from './utils/util';

(async () => {
  if (navigator.gpu === undefined) {
    const h = document.querySelector('#title') as HTMLElement;
    h.innerText = 'WebGPU is not supported in this browser.';
    return;
  }
  const adapter = await navigator.gpu.requestAdapter();
  if (adapter === null) {
    const h = document.querySelector('#title') as HTMLElement;
    h.innerText = 'No adapter is available for WebGPU.';
    return;
  }
  const device = await adapter.requestDevice();

  const canvas = document.querySelector<HTMLCanvasElement>('#webgpu-canvas');
  assert(canvas !== null);
  const observer = new ResizeObserver(() => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  });
  observer.observe(canvas);
  const context = canvas.getContext('webgpu') as GPUCanvasContext;

  // Uncomment one of the following lines to test a specific shape:
   initTriangle(context, device); // Test Triangle
  // initSquare(context, device); // Test Square
  // initPentagon(context, device); // Test Pentagon
  // initDiamond(context, device); // Test Diamond
  // initHexagon(context, device); // Test Hexagon
})();