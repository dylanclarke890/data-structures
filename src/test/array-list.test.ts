import ArrayList from "../core/array-list";

describe("array list", () => {
  it("pushes and pops items correctly", () => {
    const arrayList = new ArrayList<number>(5);
    expect(arrayList.length).toBe(0);
    arrayList.push(5);
    expect(arrayList.length).toBe(1);
    arrayList.push(5);
    arrayList.push(5);
    arrayList.push(5);
    arrayList.push(5);
    expect(arrayList.length).toBe(5);
    expect(arrayList.get(4)).toBe(5);
    arrayList.push(5);
    expect(arrayList.length).toBe(6);
    expect(arrayList.get(5)).toBe(5);
    arrayList.pop();
    expect(arrayList.length).toBe(5);
    expect(arrayList.get(5)).toBe(undefined);
  });

  it("enqueues and deques items correctly", () => {
    const arrayList = new ArrayList<number>(5);
    expect(arrayList.length).toBe(0);
    arrayList.enqueue(5);
    expect(arrayList.length).toBe(1);

    arrayList.enqueue(5);
    arrayList.enqueue(5);
    arrayList.enqueue(5);
    arrayList.enqueue(5);
    expect(arrayList.length).toBe(5);
    expect(arrayList.get(4)).toBe(5);

    arrayList.enqueue(10);
    expect(arrayList.length).toBe(6);
    expect(arrayList.get(0)).toBe(10);
    expect(arrayList.get(5)).toBe(5);

    expect(arrayList.deque()).toBe(10);
    expect(arrayList.length).toBe(5);
    expect(arrayList.get(5)).toBe(undefined);
  });
});
