import { bubble } from "../core/bubble-sort";

describe("bubble sort", () => {
  it("returns a sorted array", () => {
    const array = [5, 3, 1, 2];
    bubble(array);
    expect(array).toEqual([1, 2, 3, 5]);
  });
});