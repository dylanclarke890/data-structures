import { DoublyLinkedNode } from "./utils/nodes";

export default class LRU<K, V> {
  private length: number;
  private capacity: number;
  private head?: DoublyLinkedNode<V>;
  private tail?: DoublyLinkedNode<V>;
  private lookup: Map<K, DoublyLinkedNode<V>>;
  private reverseLookup: Map<DoublyLinkedNode<V>, K>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.length = 0;
    this.lookup = new Map<K, DoublyLinkedNode<V>>();
    this.reverseLookup = new Map<DoublyLinkedNode<V>, K>();
  }

  update(key: K, value: V): void {
    // does it exist
    let node = this.lookup.get(key);
    // if it doesn't we need to insert, check capacity and evict last item if over
    if (!node) {
      node = new DoublyLinkedNode(value);
      this.length++;
      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
    // if it does we need to update and move to the front
  }

  get(key: K): V | undefined {
    // check cache for existence
    const node = this.lookup.get(key);
    if (!node) {
      return undefined;
    }

    // update value we found and move to front
    this.detach(node);
    this.prepend(node);

    // return found value
    return node.value;
  }

  private detach(node: DoublyLinkedNode<V>): void {
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = this.head.next;
    }

    if (node === this.tail) {
      this.tail = this.tail.prev;
    }

    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: DoublyLinkedNode<V>): void {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;

    this.head = node;
  }

  private trimCache(): void {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail!;
    this.detach(tail);

    const key = this.reverseLookup.get(tail)!;
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length--;
  }
}
