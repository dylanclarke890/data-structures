interface ILinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}

export class DoublyLinkedList<TItem> implements ILinkedList<TItem> {
  get length(): number {
    throw new Error("Method not implemented.");
  }
  insertAt(item: TItem, index: number): void {
    throw new Error("Method not implemented.");
  }
  remove(item: TItem) {
    return item;
  }
  removeAt(index: number) {
    return null as TItem;
  }
  append(item: TItem): void {
    throw new Error("Method not implemented.");
  }
  prepend(item: TItem): void {
    throw new Error("Method not implemented.");
  }
  get(index: number) {
    return null as TItem;
  }
}
