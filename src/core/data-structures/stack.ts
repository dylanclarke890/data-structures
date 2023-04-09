import { SingleLinkedNode } from "../utils/nodes";

/**
 * LIFO (last-in, first-out structure).
 */
export default class Stack<T> {
  public length: number;
  private head?: SingleLinkedNode<T>;

  constructor() {
    this.length = 0;
  }

  /**
   * @bigO O(1)
   */
  push(item: T): void {
    this.length++;
    const node = new SingleLinkedNode(item);
    if (!this.head) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  /**
   * @bigO O(1)
   */
  pop(): T | undefined {
    if (!this.head) return undefined;
    this.length--;

    const head = this.head;
    this.head = head.next;
    return head.value;
  }

  /**
   * @bigO O(1)
   */
  peek(): T | undefined {
    return this.head?.value;
  }
}
