import { BinaryNode } from "../utils/nodes";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
  if (!curr) {
    return path;
  }
  // Pre
  path.push(curr.value);

  // Recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // Post

  return path;
}

export default function preOrderSearch(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
