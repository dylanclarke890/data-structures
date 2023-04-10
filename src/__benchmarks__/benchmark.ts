import bubbleSort from "../core/sorting/bubble-sort";
import timeFunction from "./utils/time-function";

let arrays: number[][];
const benchmarks = [bubbleSort];

(function benchmark() {
  benchmarks.forEach((b) => {
    setup();
    warmUp();
    arrays.forEach((a) => {
      timeFunction(`Bubble Sort (${a.length})`, () => {
        b(a);
      });
    });
  });
})();

function createArrays(): number[][] {
  return [10, 100, 1000, 10_000, 100_000, 500_000].map((size) =>
    Array.from({ length: size }, () => Math.floor(Math.random()) * size)
  );
}

function setup() {
  arrays = createArrays();
}

function warmUp() {
  for (let i = 0; i < 100; i++) {
    bubbleSort([4, 6, 2]);
  }
}
