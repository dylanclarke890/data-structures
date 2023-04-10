export default function timeFunction(fn: Function) {
  const start = performance.now();
  fn();
  return (performance.now() - start) / 1000;
}
