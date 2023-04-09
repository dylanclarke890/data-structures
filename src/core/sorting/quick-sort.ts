/**
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
