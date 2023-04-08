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

export class BinaryTreeNode<T> extends BaseNode<T> {
  left?: BinaryTreeNode<T>;
  right?: BinaryTreeNode<T>;
}

export class GeneralTreeNode<T> extends BaseNode<T> {
  children: BinaryTreeNode<T>[];

  constructor(value: T) {
    super(value);
    this.children = [];
  }
}
