import bubbleSort from "../core/sorting/bubble-sort";
import selectionSort from "../core/sorting/selection-sort";
import insertionSort from "../core/sorting/insertion-sort";
import quickSort from "../core/sorting/quick-sort";
import mergeSort from "../core/sorting/merge-sort";
import timeFunction from "./utils/time-function";

let arrays: number[][];
const sortingBenchmarks: { [x: string]: Function } = {
  quickSort,
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
};

(function benchmark() {
  Object.keys(sortingBenchmarks).forEach((b) => {
    setup();
    warmUp();
    arrays.forEach((a) => {
      timeFunction(`${b} (${a.length})`, () => sortingBenchmarks[b](a));
    });
  });
})();

function createArrays(): number[][] {
  return [10, 100, 1000, 10_000, 100_000].map((size) =>
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
