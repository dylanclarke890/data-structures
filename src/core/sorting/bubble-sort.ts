/**
 * Works it's way through the array from the 0th position, swapping elements with the item in the next position
 * if it is smaller than it. Once done the last item in the array will be the largest.
 * This then repeats until the array is sorted, omitting the last position that it ended on.
 * @bigOBest O(n)
 * @bigOAverage O(n²)
 * @bigOWorst O(n²)
 * @returns A reference to the same list, which was mutated in place.
 */
export function bubble(array: number[]): number[] {
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
