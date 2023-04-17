class BaseNode<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class SingleLinkedNode<T> extends BaseNode<T> {
  next?: SingleLinkedNode<T>;
}

export class DoublyLinkedNode<T> extends BaseNode<T> {
  next?: DoublyLinkedNode<T>;
  prev?: DoublyLinkedNode<T>;
}

export class BinaryNode<T> extends BaseNode<T> {
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
}

export class GeneralNode<T> extends BaseNode<T> {
  children: GeneralNode<T>[];

  constructor(value: T) {
    super(value);
    this.children = [];
  }
}
