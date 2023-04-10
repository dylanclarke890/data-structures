import bubbleSortBenchmark from "./sorting/bubble-sort.benchmark";

const benchmarks = [bubbleSortBenchmark];

for (let i = 0; i < benchmarks.length; i++) {
  benchmarks[i]();
}
