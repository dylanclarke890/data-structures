import { linearSearch } from "../core/linear-search";

describe("linear search", () => {
  it("returns true when an item is present", () => {
    const array = [1, 2, 3, 5];
    expect(linearSearch(array, 3)).toBe(true);
  });
  it("returns false when an item is not present", () => {
    const array = [1, 2, 3, 5];
    expect(linearSearch(array, 4)).toBe(false);
  });
});
