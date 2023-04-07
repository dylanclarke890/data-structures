import Stack from "../core/stack";

describe("queue", () => {
  it("Inserts and removes items correctly", () => {
    const list = new Stack<number>();
    expect(list.length).toBe(0);
    expect(list.pop()).toBe(undefined);
    list.push(5);
    expect(list.length).toBe(1);
    expect(list.pop()).toBe(5);
    expect(list.length).toBe(0);
    expect(list.pop()).toBe(undefined);
  });
});
