import { BinaryNode } from "../utils/nodes";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
  console.log(curr);
  if (!curr) {
    return path;
  }

  // Pre
  walk(curr.left, []);

  path.push(curr.value);

  // Post
  walk(curr.right, []);

  return path;
}

export default function inOrderSearch(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
