import { BinaryNode } from "../../core/utils/nodes";


export const bst: BinaryNode<number> = {
  value: 20,
  left: {
    value: 10,
    left: undefined,
    right: undefined,
  },
  right: {
    value: 25,
    left: {
      value: 30,
      left: undefined,
      right: undefined,
    },
    right: {
      value: 40,
      left: undefined,
      right: undefined,
    },
  },
};
