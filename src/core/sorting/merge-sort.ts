/**
 * Sorts an array by splitting it into two sub-arrays, and recursively sorting those. Recursion is stopped when there
 * is only one element in the subarray (and so that sub array is "sorted"), and the ordered sub arrays are merged together
 * to produce the final array.
 * @bigOBest O(1) - when just one element is in the array.
 * @bigOAverage O(n log n)
 * @bigOWorst O(n log n)
 * @returns A reference to the new array (the original array is not modified).
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
