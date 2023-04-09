/**
 * Sorts an array by first finding the smallest element and exchanging it with the element at the first index.
 * Then find the second smallest element and exchange with the element at the second index. Continue in this manner
 * until all elements have been processed.
 * @bigOBest O(n)
 * @bigOAverage O(n²)
 * @bigOWorst O(n²)
 * @returns A reference to the same array, sorted in place.
 */
export default function selectionSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let swap = -1;
    let min = Infinity;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i] && array[j] < min) {
        min = array[j];
        swap = j;
      }
    }
    if (swap !== -1 && swap !== i) {
      const tmp = array[i];
      array[i] = array[swap];
      array[swap] = tmp;
    }
  }
  return array;
}
