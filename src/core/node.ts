export class SingleLinkedNode<T> {
  value: T;
  next?: SingleLinkedNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoubleLinkedNode<T> {
  value: T;
  next?: DoubleLinkedNode<T>;
  prev?: DoubleLinkedNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}
