import postOrderSearch from "../../core/binary-tree/post-order";
import { tree } from "./tree";

test("Post order", function () {
  expect(postOrderSearch(tree)).toEqual([7, 5, 15, 10, 29, 45, 30, 100, 50, 20]);
});
