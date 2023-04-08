import BinarySearchTree from "../core/binary-search-tree";
import { bst } from "./utils/bst";

test("Binary Search Tree", () => {
  const binaryTree = new BinarySearchTree();
  binaryTree.head = bst;
  expect(binaryTree.find(40)).toBe(true);
  binaryTree.insert(80);
  expect(binaryTree.find(80)).toBe(true);
  binaryTree.delete(80);
  expect(binaryTree.find(80)).toBe(false);
});
