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

  delete(value: number): void {
    this.head = this.deleteNode(this.head, value);
  }

  private deleteNode(
    node: BinaryNode<number> | undefined,
    value: number
  ): BinaryNode<number> | undefined {
    if (!node) {
      return node;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      node.value = this.findMinValue(node.right);
      node.right = this.deleteNode(node.right, node.value);
    }

    return node;
  }

  private findMinValue(node: BinaryNode<number>): number {
    let minValue = node.value;
    while (node.left) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }
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
