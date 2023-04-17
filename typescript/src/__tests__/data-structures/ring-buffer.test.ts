import RingBuffer from "../../core/data-structures/ring-buffer";

test("RingBuffer", () => {
  const buffer = new RingBuffer<number>();

  buffer.enqueue(5);
  expect(buffer.deque()).toEqual(5);
  expect(buffer.deque()).toEqual(undefined);

  buffer.enqueue(42);
  buffer.enqueue(9);
  expect(buffer.deque()).toEqual(42);
  expect(buffer.deque()).toEqual(9);
  expect(buffer.deque()).toEqual(undefined);

  buffer.enqueue(42);
  buffer.enqueue(9);
  buffer.enqueue(12);
  expect(buffer.get(2)).toEqual(12);
  expect(buffer.get(1)).toEqual(9);
  expect(buffer.get(0)).toEqual(42);
});
