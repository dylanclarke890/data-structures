/**
 * Bubble sort is a comparison-based sorting algorithm that repeatedly steps through the
 * array, comparing adjacent elements and swapping them if they are in the wrong order.
 * The algorithm continues iterating through the array until no swaps are needed, indicating
 * that the array is sorted. Bubble sort has a simple implementation, but it is inefficient
 * for large datasets due to its quadratic time complexity.
 *
 * @bigOLower Ω(n) - When the input array is already sorted or nearly sorted.
 * @bigOUpper O(n²) - When the input array is sorted in reverse order or is completely unsorted.
 * @returns A reference to the same array, which was mutated in place.
 */
export default function bubbleSort(array: number[]): number[] {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}
