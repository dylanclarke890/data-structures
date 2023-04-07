import { sqrtJumps } from "../core/two-crystal-balls";

describe("two_crystal_balls", () => {
  it("returns the index of the first break", () => {
    const array = [false, false, false, false, false, false, false, true];
    expect(sqrtJumps(array)).toBe(array.findIndex((v) => v === true));
  });
  it("returns -1 when it doesn't find a break", () => {
    const array = [false, false, false, false, false, false, false, false];
    expect(sqrtJumps(array)).toBe(-1);
  });
});
