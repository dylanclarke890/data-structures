import quickSort from "../../core/sorting/quick-sort";

test("quickSort", () => {
  const arr = [16, 123, 23, 5, 6];
  quickSort(arr);
  expect(arr).toEqual([5, 6, 16, 23, 123]);
});
