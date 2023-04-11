/**
 * Quick sort is a comparison-based sorting algorithm that uses a divide-and-conquer approach.
 * It works by selecting a 'pivot' element from the array and partitioning the other elements
 * into two groups, according to whether they are less than or greater than the pivot. The
 * sub-arrays are then sorted recursively, and combined to produce the final sorted array.
 *
 * @lowerBound Ω(n log n) - When the array is partitioned equally or nearly equally (balanced partitioning).
 * @upperBound O(n²) - If the array is partitioned poorly (unbalanced partitioning).
 * @returns A reference to the same array, which was mutated in place.
 */
export default function quickSort(arr: number[]): number[] {
  sort(arr);
  return arr;
}

function sort(arr: number[]): void {
  const stack: [number, number][] = Array.from({ length: arr.length });
  stack.push([0, arr.length - 1]);
  let length = 1;

  while (length) {
    const [low, high] = stack.pop() as [number, number];
    length--;

    if (low >= high) {
      continue;
    }

    const pivotIdx = partition(arr, low, high);

    stack.push([low, pivotIdx - 1]);
    length++;
    stack.push([pivotIdx + 1, high]);
    length++;
  }
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let idx = low - 1;

  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[high] = arr[idx];
  arr[idx] = pivot;

  return idx;
}
