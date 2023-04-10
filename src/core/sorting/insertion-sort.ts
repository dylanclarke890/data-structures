/**
 * Insertion sort is a comparison-based sorting algorithm that builds the final sorted array
 * one item at a time. It is efficient for small datasets and partially sorted arrays.
 * The algorithm iterates through the array, comparing each element with the ones before it.
 * When an element smaller than its predecessor is found, it is inserted into the correct
 * position among the previously sorted elements, shifting the larger elements to the right.
 *
 * @bigOLower Ω(n) - When the input array is already sorted or nearly sorted.
 * @bigOUpper O(n²) - When the input array is sorted in reverse order or is completely unsorted.
 * @returns A reference to the same array, which was mutated in place.
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
