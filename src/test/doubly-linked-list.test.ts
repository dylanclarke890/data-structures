import { DoublyLinkedList } from "../core/doubly-linked-list";
import { testList } from "./list-test";

test("DoublyLinkedList", function () {
  const list = new DoublyLinkedList<number>();
  testList(list);
});
