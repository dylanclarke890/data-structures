import Queue from "../data-structures/queue";
import { BinaryNode } from "../utils/nodes";

export default function breadthFirstSearch(head: BinaryNode<number>, needle: number): boolean {
  const q = new Queue<BinaryNode<number>>();
  q.enqueue(head);

  while (q.length) {
    const curr = q.deque()!;

    // found
    if (curr.value === needle) {
      return true;
    }

    // else enqueue children
    if (curr.left) {
      q.enqueue(curr.left);
    }
    if (curr.right) {
      q.enqueue(curr.right);
    }
  }

  return false;
}
