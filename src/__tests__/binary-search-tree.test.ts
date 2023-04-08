import BinarySearchTree from "../core/binary-search-tree";
import { bst } from "./utils/bst";

describe("Binary Search Tree", () => {
  it("Find", () => {
    const binaryTree = new BinarySearchTree();
    binaryTree.head = bst;
    expect(binaryTree.find(40)).toBe(true);
  });

  it("Insert", () => {
    const binaryTree = new BinarySearchTree();
    binaryTree.head = bst;
  });

  it("Delete", () => {
    const binaryTree = new BinarySearchTree();
    binaryTree.head = bst;
  });
});
