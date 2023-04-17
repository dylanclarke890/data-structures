export default class RingBuffer<T> {
  private items: (T | undefined)[];
  private capacity: number;
  private head: number;
  private tail: number;
  length: number;

  constructor() {
    this.capacity = 8;
    this.items = new Array(this.capacity);
    this.length = 0;
    this.head = 0;
    this.tail = 0;
  }

  get(idx: number): T | undefined {
    if (idx > this.length) return undefined;
    return this.items[(this.head % this.capacity) + idx];
  }

  private extendCapacity() {
    const prevCapacity = this.capacity;
    this.capacity *= 2;
    const tmp = this.items;
    this.items = new Array(this.capacity);
    const buffer = this.capacity / 4;
    for (let i = 0; i < tmp.length; i++) {
      this.items[buffer + i] = tmp[(this.head + i) % prevCapacity];
    }
    this.head = buffer;
    this.tail = buffer + this.length;
  }

  enqueue(item: T): void {
    if (this.length === this.capacity) {
      this.extendCapacity();
    }
    this.items[this.tail % this.capacity] = item;
    this.tail++;
    this.length++;
  }

  deque(): T | undefined {
    if (this.length === 0) return undefined;
    const idx = this.head++ % this.capacity;
    const item = this.items[idx];
    this.items[idx] = undefined;
    this.length--;
    return item;
  }
}
