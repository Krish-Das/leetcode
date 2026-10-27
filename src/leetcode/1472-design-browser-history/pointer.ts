class HistoryNode {
  url: string
  next: HistoryNode | null
  prev: HistoryNode | null
  constructor(
    url: string,
    next: HistoryNode | null = null,
    prev: HistoryNode | null = null,
  ) {
    this.url = url
    this.next = next
    this.prev = prev
  }
}

export class BrowserHistory {
  private current: HistoryNode

  constructor(homepage: string) {
    this.current = new HistoryNode(homepage)
  }

  visit(url: string): void {
    const node = new HistoryNode(url, null, this.current)
    this.current.next = node
    this.current = node
  }

  back(steps: number): string {
    for (let i = 0; i < steps && this.current.prev; i++)
      this.current = this.current.prev
    return this.current.url
  }

  forward(steps: number): string {
    for (let i = 0; i < steps && this.current.next; i++)
      this.current = this.current.next
    return this.current.url
  }
}
