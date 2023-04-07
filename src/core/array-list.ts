export default class ArrayList<T> {
  length: number;
  private capacity: number;
  private items: (T | undefined)[];

  constructor(capacity: number) {
    this.capacity = capacity ?? 3;
    this.length = 0;
    this.items = new Array(this.capacity);
  }

  get(idx: number): T | undefined {
    if (idx > this.length) return undefined;
    return this.items[idx];
  }

  push(item: T) {
    if (this.length === this.capacity) {
      this.capacity = this.capacity * 2;
      const tmp = this.items;
      this.items = new Array(this.capacity);
      for (let i = 0; i < tmp.length; i++) {
        this.items[i] = tmp[i];
      }
    }
    this.items[this.length++] = item;
  }

  pop(): T | undefined {
    if (this.length === 0) return undefined;
    const item = this.items[--this.length];
    this.items[this.length] = undefined;
    return item;
  }
}