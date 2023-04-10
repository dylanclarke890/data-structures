import bubbleSort from "../../core/sorting/bubble-sort";
import createArrays from "../utils/create-arrays";
import timeFunction from "../utils/time-function";

let arrays: number[][];

export default function bubbleSortBenchmark() {
  setup();
  warmUp();
  run();
}

function setup() {
  arrays = createArrays();
}

function run() {
  arrays.forEach((a) => {
    timeFunction(`Bubble Sort (${a.length})`, () => {
      bubbleSort(a);
    });
  });
}

function warmUp() {
  for (let i = 0; i < 100; i++) {
    bubbleSort([4, 6, 2]);
  }
}
