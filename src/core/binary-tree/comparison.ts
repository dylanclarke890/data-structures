import { BinaryNode } from "../utils/nodes";

export default function binaryTreeComparison(
  a: BinaryNode<number> | undefined,
  b: BinaryNode<number> | undefined
): boolean {
  // didn't get a value for either
  if (a === undefined && b === undefined) {
    return true;
  }

  // one is null but the other isn't
  if (a === undefined || b === undefined) {
    return false;
  }

  // values are not equal
  if (a.value !== b.value) {
    return false;
  }

  // now check that the left and right branches of the current point are equal
  return binaryTreeComparison(a.left, b.left) && binaryTreeComparison(a.right, b.right);
}
