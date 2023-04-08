type Point = {
  x: number;
  y: number;
};

const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
    return false; // We're outside the map
  }

  if (maze[curr.y][curr.x] === wall) {
    return false; // We're in a wall
  }

  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true; // We're at the end point
  }

  if (seen[curr.y][curr.x]) {
    return false; // Already visited this point
  }

  // Pre
  path.push(curr);
  seen[curr.y][curr.x] = true;

  // Recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }

  // Post
  path.pop();

  return false;
}

export default function mazeSolver(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
