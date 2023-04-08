interface IHeap {
  length: number;
  insert(value: number): void;
  delete(value: number): void;
}

export class MinHeap implements IHeap {
  public length: number;
  private items: number[];

  constructor() {
    this.length = 0;
    this.items = [];
  }

  insert(value: number): void {
    this.items[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const out = this.items[0];
    if (this.length === 1) {
      this.items = [];
      return out;
    }

    this.length--;
    this.items[0] = this.items[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    const parent = this.parent(idx);
    const parentValue = this.items[parent];
    const value = this.items[idx];

    if (parentValue > value) {
      this.items[idx] = parentValue;
      this.items[parent] = value;
      this.heapifyUp(parent);
    }
  }

  private heapifyDown(idx: number): void {
    const leftIdx = this.leftChild(idx);
    const rightIdx = this.rightChild(idx);
    if (idx >= this.length || leftIdx > this.length) {
      return;
    }

    const leftValue = this.items[leftIdx];
    const rightValue = this.items[rightIdx];
    const value = this.items[idx];

    if (leftValue > rightValue && value > rightValue) {
      this.items[idx] = rightValue;
      this.items[rightIdx] = value;
      this.heapifyDown(rightIdx);
    } else if (rightValue > leftValue && value > leftValue) {
      this.items[idx] = leftIdx;
      this.items[leftIdx] = value;
      this.heapifyDown(leftIdx);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChild(idx: number): number {
    return idx * 2 + 2;
  }
}

export class MaxHeap implements IHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  insert(value: number): void {}

  delete(): number {
    return 0;
  }

  private heapifyUp() {}

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChild(idx: number): number {
    return idx * 2 + 1;
  }
}
