import inOrderSearch from "../../core/binary-tree/in-order";
import { tree } from "../utils/tree";


test("In order", function () {
  expect(inOrderSearch(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});
