import binaryTreeComparison from "../../core/binary-tree/comparison";
import { tree, tree2 } from "../utils/tree";

test("Compare Binary Trees", function () {
  expect(binaryTreeComparison(tree, tree)).toEqual(true);
  expect(binaryTreeComparison(tree, tree2)).toEqual(false);
});
