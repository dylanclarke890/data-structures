import adjMatrixBfs from "../core/adj-matrix-bfs";
import { matrix2 } from "./utils/graph";

test("bfs - graph matrix", function () {
  expect(adjMatrixBfs(matrix2, 0, 6)).toEqual([0, 1, 4, 5, 6]);

  expect(adjMatrixBfs(matrix2, 6, 0)).toEqual([]);
});
