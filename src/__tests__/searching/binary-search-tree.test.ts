import BinarySearchTree from "../../core/searching/binary-search-tree";
import { bst } from "../utils/bst";

describe("Binary Search Tree", () => {
  it("Find, Insert, Delete", () => {
    const binaryTree = new BinarySearchTree();
    binaryTree.head = bst;
    expect(binaryTree.find(40)).toBe(true);
    binaryTree.insert(80);
    expect(binaryTree.find(80)).toBe(true);
    binaryTree.delete(80);
    expect(binaryTree.find(80)).toBe(false);
  });

  it("Min, Max", () => {
    const binaryTree = new BinarySearchTree();
    binaryTree.head = bst;
    expect(binaryTree.min()).toBe(10);
    expect(binaryTree.max()).toBe(40);
  });
});
