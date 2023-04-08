import { BinaryNode } from "../utils/nodes";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  walk(curr.left, []);
  walk(curr.right, []);
  path.push(curr.value);

  return path;
}

export default function postOrderSearch(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
