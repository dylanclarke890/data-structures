import { BinaryNode } from "./utils/nodes";

export default class BinarySearchTree {
  head?: BinaryNode<number>;

  constructor(initialValue?: number) {
    if (initialValue) {
      this.head = new BinaryNode(initialValue);
    }
  }

  find(value: number): boolean {
    return this.findNeedle(this.head, value);
  }

  insert(value: number): void {
    const node = new BinaryNode(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    this.insertNode(node, this.head);
  }

  delete(value: number) {}

  private insertNode(item: BinaryNode<number>, curr: BinaryNode<number>): void {
    if (item.value <= curr.value) {
      if (curr.left) this.insertNode(item, curr.left);
      else {
        curr.left = item;
        return;
      }
      return;
    }

    if (curr.right) this.insertNode(item, curr.right);
    else {
      curr.right = item;
    }
  }

  private findNeedle(node: BinaryNode<number> | undefined, needle: number): boolean {
    if (!node) {
      return false;
    }

    if (node.value === needle) {
      return true;
    }

    if (node.value <= needle) {
      this.findNeedle(node.left, needle);
    }

    return this.findNeedle(node.right, needle);
  }
}
