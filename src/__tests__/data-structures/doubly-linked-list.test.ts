import { DoublyLinkedList } from "../core/doubly-linked-list";
import { testList } from "../utils/list-test";

test("DoublyLinkedList", function () {
  const list = new DoublyLinkedList<number>();
  testList(list);
});
