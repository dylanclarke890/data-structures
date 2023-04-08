import { DoublyLinkedNode } from "./node";

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

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = this.head?.next;
    }
    curr = curr as NonNullable<DoublyLinkedNode<T>>;

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
    return item;
  }

  removeAt(index: number) {
    return null as T;
  }

  get(index: number) {
    return null as T;
  }
}
