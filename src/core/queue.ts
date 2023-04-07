import ListNode from "./node";

export default class Queue<T> {
  public length: number;
  private head?: ListNode<T>;
  private tail?: ListNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    this.length++;
    const node = new ListNode(item);
    if (!this.tail) {
      this.tail = this.head = node;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) return undefined;
    this.length--;

    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
