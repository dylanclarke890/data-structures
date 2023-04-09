/**
 * Processes elements one at a time, comparing them with the elements to the left of them (which is also the reason
 * we start processing from the 2nd element onwards). Works best on small arrays or arrays that are already partially
 * sorted.
 * @bigOBest O(n)
 * @bigOAverage O(n²)
 * @bigOWorst O(n²)
 */
export default function insertionSort(array: number[]): number[] {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}
