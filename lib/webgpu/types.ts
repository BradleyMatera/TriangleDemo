export type DemoInstance = {
  readonly clearColor: GPUColor;
  readonly requiresDepth: boolean;
  resize: (width: number, height: number) => void;
  update: (timestamp: number) => void;
  render: (pass: GPURenderPassEncoder) => void;
  dispose: () => void;
};
