export function test(run: (num: number[]) => number[]): string {
  const start = performance.now();
  for (let i = 0; i < 2e6; i++) {
    const split = i.toString().split("");
    const arr = split.map((s) => Number(s));
    const result = BigInt(run(arr).join(""));

    if (BigInt(i + 1) !== result) {
      const end = performance.now();
      console.log({ digit: i, result: run(arr), added: result });
      return `Result did not match on ${i}\nTook ${end - start}MS`;
    }
  }

  const end = performance.now();
  return `All tests passed successfully\nTook ${end - start}MS`;
}
