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

  private findNeedle(node: BinaryNode<number> | undefined, needle: number): boolean {
    if (!node) {
      return false;
    }

    if (node.value === needle) {
      return true;
    }

    if (node.value < needle) {
      this.findNeedle(node.right, needle);
    }

    return this.findNeedle(node.left, needle);
  }

  insert(value: number) {}
}
