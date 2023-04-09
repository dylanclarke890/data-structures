import adjListDfs from "../core/adj-list-dfs";
import { list2 } from "./utils/graph";

test("dfs - graph", function () {
  expect(adjListDfs(list2, 0, 6)).toEqual([0, 1, 4, 5, 6]);

  expect(adjListDfs(list2, 6, 0)).toEqual(null);
});
