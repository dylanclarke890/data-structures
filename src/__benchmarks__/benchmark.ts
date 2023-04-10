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
  const iterations = 10;
  const results: BenchmarkResults = {};
  for (let i = 0; i < iterations; i++) {
    shuffleArray(Object.keys(sortingBenchmarks)).forEach((b) => {
      console.log(`${b} (${i + 1} / ${iterations})`);
      setup();
      warmUp();
      arrays.forEach((a) => {
        const result = timeFunction(() => sortingBenchmarks[b](a));
        if (!results[b]) results[b] = { size: a.length, times: [] };
        results[b].times.push(result);
        console.log(`${a.length}`, result);
      });
      console.log("\n");
    });
  }
  displayResults(results);
})();

function createArrays(start?: number): number[][] {
  start ??= 0;
  const sizes = [10, 100, 1000, 10_000, 100_000];
  return sizes
    .slice(start)
    .map((size) => Array.from({ length: size }, () => Math.floor(Math.random()) * size));
}

function shuffleArray<T>(arr: T[]): T[] {
  for (let idx = arr.length - 1; idx > 0; idx--) {
    const newIdx = Math.floor(Math.random() * (idx + 1));
    const tmp = arr[idx];
    arr[idx] = arr[newIdx];
    arr[newIdx] = tmp;
  }
  return arr;
}

function setup() {
  arrays = createArrays(3);
}

function warmUp() {
  const bms = Object.keys(sortingBenchmarks);
  for (let i = 0; i < bms.length; i++) {
    sortingBenchmarks[bms[i]]([4, 6, 2]);
  }
}

function displayResults(results: BenchmarkResults) {
  const bestForSize = new Map<number, { name: string; time: number }[]>();
  Object.keys(results).forEach((r) => {
    const { times, size } = results[r];
    let min = Infinity;
    let max = -Infinity;
    const average =
      times.reduce((acc, curr) => {
        if (curr > max) max = curr;
        if (curr < min) min = curr;
        return acc + curr;
      }, 0) / times.length;

    if (!bestForSize.has(size)) bestForSize.set(size, []);
    bestForSize.get(size)!.push({ name: r, time: min });

    console.log(r);
    console.log(`Min     : ${min}`);
    console.log(`Average : ${average}`);
    console.log(`Max     : ${max}`);
    console.log("\n");
  });
  const keys = bestForSize.keys();
  for (const key of keys) {
    const best = bestForSize.get(key)!.reduce((b, curr) => (b.time < curr.time ? b : curr));
    console.log(`Best for ${key} - ${best.name}: ${best.time}`);
  }
}

type BenchmarkResults = {
  [x: string]: { size: number; times: number[] };
};
