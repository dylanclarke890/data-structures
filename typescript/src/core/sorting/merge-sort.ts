/**
 * Merge sort is a comparison-based sorting algorithm that uses a divide-and-conquer approach.
 * It works by recursively dividing the array into two halves, sorting each half, and then
 * merging the sorted halves back together. The base case for the recursion is when the array
 * has only one element, at which point it is considered sorted.
 *
 * @lowerBound Ω(n log n)
 * @upperBound O(n log n) - same as the lower bound.
 * @returns A new sorted array, as the original input array is not mutated in place.
 */
export default function mergeSort(array: number[]): number[] {
  return sort(array, 0, array.length - 1);
}

function merge(array: number[], lo: number, partition: number, hi: number): number[] {
  const left = array.slice(lo, partition + 1);
  const right = array.slice(partition + 1, hi + 1);
  left.push(Infinity);
  right.push(Infinity);
  let i = 0,
    j = 0;

  for (let k = lo; k <= hi; k++) {
    if (left[i] < right[j]) {
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
  }
  return array;
}

function sort(array: number[], lo: number, hi: number): number[] {
  if (lo >= hi) {
    return array;
  }
  const partition = Math.floor((lo + hi) / 2);
  sort(array, lo, partition);
  sort(array, partition + 1, hi);
  return merge(array, lo, partition, hi);
}
