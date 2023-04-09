import breadthFirstSearch from "../core/breadth-first-search";
import { tree } from "./utils/tree";

test("bt bfs", function () {
  expect(breadthFirstSearch(tree, 45)).toEqual(true);
  expect(breadthFirstSearch(tree, 7)).toEqual(true);
  expect(breadthFirstSearch(tree, 69)).toEqual(false);
});
