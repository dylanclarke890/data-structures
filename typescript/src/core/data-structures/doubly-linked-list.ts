import { DoublyLinkedNode } from "../utils/nodes";

interface ILinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}

export class DoublyLinkedList<T> implements ILinkedList<T> {
  length: number;
  head?: DoublyLinkedNode<T>;
  tail?: DoublyLinkedNode<T>;

  constructor() {
    this.length = 0;
  }

  prepend(item: T): void {
    const node = new DoublyLinkedNode(item);
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  append(item: T): void {
    const node = new DoublyLinkedNode(item);
    this.length++;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  insertAt(item: T, index: number): void {
    if (index > this.length) {
      throw new Error("Out of bounds id");
    }
    if (index === this.length) {
      this.append(item);
      return;
    }
    if (index === 0) {
      this.prepend(item);
      return;
    }

    const curr = this.getAt(index) as NonNullable<DoublyLinkedNode<T>>;
    const node = new DoublyLinkedNode(item);

    node.next = curr;
    node.prev = curr.prev;
    curr.next = node;
    if (curr.prev) {
      curr.prev.next = node;
    }
    this.length++;
  }

  remove(item: T) {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; i++) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    return this.removeNode(curr);
  }

  removeAt(index: number) {
    const node = this.getAt(index);
    if (!node) {
      return undefined;
    }

    return this.removeNode(node);
  }

  get(index: number): T | undefined {
    return this.getAt(index)?.value;
  }

  private getAt(idx: number): DoublyLinkedNode<T> | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < idx; i++) {
      curr = curr?.next;
    }
    return curr;
  }

  private removeNode(node: DoublyLinkedNode<T>): T | undefined {
    if (--this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.next;
    }

    node.next = node.prev = undefined;
    return node.value;
  }
}
