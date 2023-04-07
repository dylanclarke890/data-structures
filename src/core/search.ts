/**
 * Works on any array. Check each index individually until found or the end of the array is reached.
 * @bigO O(n)
 */
export function linear(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
  return false;
}

/**
 * Works on any sorted array. Check increasingly smaller sections of the array based on whether the current
 * search point is smaller or larger than the target.
 * @bigO O(log n)
 */
export function binary(haystack: number[], needle: number): boolean {
  return false;
}
