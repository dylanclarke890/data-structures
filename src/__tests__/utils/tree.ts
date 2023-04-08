/* istanbul ignore file */

type BinaryNode<T> = {
  value: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
};

export const tree: BinaryNode<number> = {
  value: 20,
  right: {
    value: 50,
    right: {
      value: 100,
      right: undefined,
      left: undefined,
    },
    left: {
      value: 30,
      right: {
        value: 45,
        right: undefined,
        left: undefined,
      },
      left: {
        value: 29,
        right: undefined,
        left: undefined,
      },
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: undefined,
      left: undefined,
    },
    left: {
      value: 5,
      right: {
        value: 7,
        right: undefined,
        left: undefined,
      },
      left: undefined,
    },
  },
};

export const tree2: BinaryNode<number> = {
  value: 20,
  right: {
    value: 50,
    right: undefined,
    left: {
      value: 30,
      right: {
        value: 45,
        right: {
          value: 49,
          left: undefined,
          right: undefined,
        },
        left: undefined,
      },
      left: {
        value: 29,
        right: undefined,
        left: {
          value: 21,
          right: undefined,
          left: undefined,
        },
      },
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: undefined,
      left: undefined,
    },
    left: {
      value: 5,
      right: {
        value: 7,
        right: undefined,
        left: undefined,
      },
      left: undefined,
    },
  },
};
