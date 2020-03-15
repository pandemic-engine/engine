export class Renderer2D {
  protected canvas: HTMLCanvasElement
  protected context: CanvasRenderingContext2D | null

  constructor (canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d')
  }

  clear () {
    if (this.context) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }

  drawRect (
    x: number,
    y: number,
    width: number,
    height: number,
    fillColor: string
  ) {
    if (this.context) {
      this.context.fillStyle = fillColor
      this.context.fillRect(x, y, width, height)
    } else {
      throw new Error('No render context available')
    }
  }
}
