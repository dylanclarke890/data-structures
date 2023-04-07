/**
 * Works on any array. Check each index individually until found or the end of the array is reached.
 * @bigO O(n)
 */
export function linearSearch(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
  return false;
}
