export default class ListNode<T> {
  value: T;
  next?: ListNode<T>;
  prev?: ListNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}
