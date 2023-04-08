import { BinaryNode } from "../utils/nodes";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // Pre

  // Recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // Post
  path.push(curr.value);

  return path;
}

export default function postOrderSearch(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
