import { BinaryNode } from "../utils/nodes";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // Pre

  // Recurse
  walk(curr.left, path);

  // In
  path.push(curr.value);

  // Recurse
  walk(curr.right, path);

  // Post

  return path;
}

export default function inOrderSearch(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
