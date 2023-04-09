import Queue from "./data-structures/queue";

export default function adjMatrixBfs(graph: number[][], source: number, needle: number): number[] {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  const q = new Queue<number>();
  seen[source] = true;
  q.enqueue(source);

  do {
    const curr = q.deque()!;
    if (curr === needle) {
      break;
    }

    seen[curr] = true;
    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; i++) {
      if (adjs[i] === 0 || seen[i]) continue;
      seen[i] = true;
      prev[i] = curr;
      q.enqueue(i);
    }
  } while (q.length);

  if (prev[needle] === -1) {
    return [];
  }

  let curr = needle;
  const out: number[] = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source, ...out.reverse()];
}
