class LRUCache {
  cache = new Map<number, number>()
  constructor(private readonly capacity: number) {}

  get(key: number): number {
    const value = this.cache.get(key)
    if (value === undefined) return -1
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) this.cache.delete(key)
    if (this.cache.size >= this.capacity)
      // biome-ignore lint/style/noNonNullAssertion: cache has >= 1 entry when capacity (>=1) is exhausted
      this.cache.delete(this.cache.keys().next().value!)
    this.cache.set(key, value)
  }
}

export { LRUCache }
