/**
 * Selection sort is a comparison-based sorting algorithm that sorts the input array by
 * repeatedly finding the minimum element from the unsorted part and putting it at the
 * beginning of the sorted part. The algorithm maintains two subarrays within the input
 * array: the sorted part, which starts empty at the leftmost end, and the unsorted part.
 * In each iteration, the minimum element from the unsorted subarray is moved to the end
 * of the sorted subarray.
 *
 * @lowerBound Ω(n²)
 * @upperBound O(n²) - same as the lower bound.
 * @returns A reference to the same array, which was mutated in place.
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
