import Queue from "../../core/data-structures/queue";

test("Queue", () => {
  const list = new Queue<number>();
  expect(list.length).toBe(0);
  list.enqueue(5);
  expect(list.length).toBe(1);
  expect(list.deque()).toBe(5);
  expect(list.length).toBe(0);
});
