export default function timeFunction(name: string, fn: Function) {
  const start = performance.now();
  fn();
  console.log(name, (performance.now() - start) / 1000);
}
