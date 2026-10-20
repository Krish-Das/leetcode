class LRUCache {
  cache: Map<number, number>
  constructor(private capacity: number) {
    this.cache = new Map<number, number>()
  }

  get(key: number): number {
    const existing = this.cache.get(key)
    if (existing === undefined) return -1

    this.update(key, existing)
    return existing
  }

  put(key: number, value: number): void {
    const existing = this.cache.get(key)
    const isNew = existing === undefined
    const isExhausted = this.cache.size >= this.capacity
    if (isNew && isExhausted) this.evict()

    this.update(key, value)
  }

  private update(key: number, value: number): void {
    this.cache.delete(key)
    this.cache.set(key, value)
  }

  private evict(): void {
    // biome-ignore lint/style/noNonNullAssertion: map has >= 1 entry when capacity (>=1) is exhausted
    const least = Array.from(this.cache.keys()).at(0)!
    this.cache.delete(least)
  }
}

export { LRUCache }
