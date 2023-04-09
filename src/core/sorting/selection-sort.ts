export default function selectionSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let swap = -1;
    let min = Infinity;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i] && array[j] < min) {
        min = array[j];
        swap = j;
      }
    }
    if (swap !== -1 && swap !== i) {
      const tmp = array[i];
      array[i] = array[swap];
      array[swap] = tmp;
    }
  }
  return array;
}
