export class NumArray {
  constructor(private readonly nums: number[]) {}

  sumRange(left: number, right: number): number {
    return this.nums.slice(left, right + 1).reduce((acc, v) => acc + v, 0)
  }
}
