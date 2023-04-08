import { BinaryNode } from "../utils/nodes";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
  if (!curr) {
    return path;
  }
  // Pre
  path.push(curr.value);

  walk(curr.left, []);
  walk(curr.right, []);

  // Post

  return path;
}

export default function preOrderSearch(head: BinaryNode<number>): number[] {
  const p = walk(head, []);
  console.log(p);
  return walk(head, []);
}
