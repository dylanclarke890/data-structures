type SortFn<T> = (arr: T[]) => T[];

/**
 * Assumes that the function returns a reference to the modified array, whether it was in place or not.
 */
export default function sortTest(sortFn: SortFn<number>) {
  // Orders an unordered array.
  expect(sortFn([5, 2, 6, 1, 4, 3, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  // Shouldn't reorder an array that's already in order.
  expect(sortFn([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
}
