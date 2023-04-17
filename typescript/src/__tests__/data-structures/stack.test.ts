import Stack from "../../core/data-structures/stack";

test("Stack", () => {
  const list = new Stack<number>();
  expect(list.length).toBe(0);
  expect(list.pop()).toBe(undefined);
  list.push(5);
  expect(list.length).toBe(1);
  expect(list.pop()).toBe(5);
  expect(list.length).toBe(0);
  expect(list.pop()).toBe(undefined);
});
