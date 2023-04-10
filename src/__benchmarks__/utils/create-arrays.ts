export default function createArrays(): number[][] {
  return [10, 100, 1000, 10_000, 100_000, 500_000].map((size) =>
    Array.from({ length: size }, () => Math.floor(Math.random()) * size)
  );
}
