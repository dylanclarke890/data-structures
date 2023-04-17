import dijkstraList from "../core/dijkstra";
import { list1 } from "./utils/graph";

test("dijkstra via adj list", function () {
  expect(dijkstraList(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
});
