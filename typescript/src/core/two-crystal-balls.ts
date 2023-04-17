/**
 * Works under the assumption that the length of the array has a sqrt.
 * Returns incorrect results in some cases. For example [false,false,false,false,false,false,true] incorrectly
 * returns -1 instead of 6 as the jumpAmount is calculated as 2, and so causes an off-by-one error and doesn't check
 * the last item in the list.
 * @bigO O(sqrt(n))
 */
export function sqrtJumps(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) return i;
  }

  return -1;
}
