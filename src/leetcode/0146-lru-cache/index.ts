class LRUCache {
  private capacity: number
  private cache: Map<number, number>
  private recency: Set<number>

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map<number, number>()
    this.recency = new Set<number>()
  }

  /**
   * Move the key to the end of the recency order, or remove it entirely.
   * @param method - `"update"` (default) re-adds the key as most recent; `"delete"` only removes it.
   */
  private updateRecency(
    key: number,
    method: "update" | "delete" = "update",
  ): void {
    if (this.recency.has(key)) this.recency.delete(key)
    if (method === "update") this.recency.add(key)
  }

  get = (key: number): number => {
    const val = this.cache.get(key)
    if (val === undefined) return -1

    this.updateRecency(key)
    return val
  }

  put(key: number, value: number): void {
    // update existing entry — no eviction needed
    if (this.cache.has(key)) {
      this.cache.set(key, value)
      this.updateRecency(key)
      return
    }

    // capacity available — insert without eviction
    if (this.capacity > 0) {
      this.cache.set(key, value)
      this.updateRecency(key)
      this.capacity--
      return
    }

    // at capacity — evict least recently used
    const leastUsed = this.recency.values().next().value
    if (leastUsed) {
      this.cache.delete(leastUsed)
      this.updateRecency(leastUsed, "delete")
    }
    this.cache.set(key, value)
    this.updateRecency(key)
  }
}

export { LRUCache }
