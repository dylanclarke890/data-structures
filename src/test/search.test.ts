import { binary, linear } from "../core/search";

describe("search_linear", () => {
  it("returns true when an item is present", () => {
    const array = [1, 2, 3, 5];
    expect(linear(array, 3)).toBe(true);
  });
  it("returns false when an item is not present", () => {
    const array = [1, 2, 3, 5];
    expect(linear(array, 4)).toBe(false);
  });
});

describe("search_binary", () => {
  it("returns true when an item is present", () => {
    const array = [1, 2, 3, 5];
    expect(binary(array, 3)).toBe(true);
  });
  it("returns false when an item is not present", () => {
    const array = [1, 2, 3, 5];
    expect(binary(array, 4)).toBe(false);
  });
});
