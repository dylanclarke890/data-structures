export class Node<T> {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}
