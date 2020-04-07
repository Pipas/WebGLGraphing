export class Vector2 {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  toString(): string {
    return JSON.stringify({
      x: this.x,
      y: this.y
    })
  }
}