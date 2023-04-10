/**
 * Quick sort is a comparison-based sorting algorithm that uses a divide-and-conquer approach.
 * It works by selecting a 'pivot' element from the array and partitioning the other elements
 * into two groups, according to whether they are less than or greater than the pivot. The
 * sub-arrays are then sorted recursively, and combined to produce the final sorted array.
 *
 * @bigOLower Ω(n log n) - When the array is partitioned equally or nearly equally (balanced partitioning).
 * @bigOUpper O(n²) - If the array is partitioned poorly (unbalanced partitioning).
 * @returns A reference to the same array, which was mutated in place.
 */
export default function quickSort(arr: number[]): number[] {
  sort(arr, 0, arr.length - 1);
  return arr;
}

function sort(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const pivotIdx = partition(arr, low, high);

  sort(arr, low, pivotIdx - 1);
  sort(arr, pivotIdx + 1, high);
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
