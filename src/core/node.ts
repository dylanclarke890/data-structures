export class SingleLinkedNode<T> {
  value: T;
  next?: SingleLinkedNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoublyLinkedNode<T> {
  value: T;
  next?: DoublyLinkedNode<T>;
  prev?: DoublyLinkedNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}
