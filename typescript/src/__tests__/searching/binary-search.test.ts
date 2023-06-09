import { binarySearch } from "../../core/searching/binary-search";

describe("binary search", () => {
  it("returns true when an item is present", () => {
    const array = [1, 2, 3, 5];
    expect(binarySearch(array, 3)).toBe(true);
  });
  it("returns false when an item is not present", () => {
    const array = [1, 2, 3, 5];
    expect(binarySearch(array, 4)).toBe(false);
  });
});
