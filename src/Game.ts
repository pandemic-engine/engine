import { Box } from './Box'
import { Renderer2D } from './Renderer2D'
import { Vector2 } from './Vector2'

export class Game {
  protected isRunning: boolean = false
  protected lastElapsedTime: number = 0
  protected deltaTime: number = 0
  protected maxDeltaTime: number = 3
  protected fps: number = 0

  protected renderer: Renderer2D

  protected box:Box

  constructor (canvasElement: HTMLCanvasElement) {
    this.renderer = new Renderer2D(canvasElement)

    canvasElement.addEventListener('click', (e) => {
      const moveTo = new Vector2(
        e.clientX - canvasElement.getBoundingClientRect().left,
        e.clientY - canvasElement.getBoundingClientRect().top
      )

      this.box.moveTo = moveTo
    })

    this.box = new Box(new Vector2(0, 0), 100, 50)
  }

  /**
   * Start the game.
   */
  start (): void {
    if (this.isRunning === true) {
      // Game is running already
      return
    }

    this.isRunning = true

    // Start the game loop
    window.requestAnimationFrame(this.loop.bind(this))
  }

  /**
   * Stop the game.
   */
  stop (): void {
    this.isRunning = false
  }

  /**
   * Complete all the calculations and actions of the game for a single frame.
   *
   * @param {number} elapsedTime
   */
  loop (elapsedTime: number): void {
    // Calculate deltaTime and FPS
    this.deltaTime = Math.min(elapsedTime - this.lastElapsedTime, this.maxDeltaTime) / 1000;
    this.fps = 1 / this.deltaTime;

    // Store the current elapsed time in order to compare the next frame
    this.lastElapsedTime = elapsedTime;

    // Calculate
    this.box.onUpdate(this.deltaTime)

    // Clear canvas
    this.renderer.clear()

    // Redraw
    this.box.draw(this.renderer)

    if (this.isRunning === true) {
      // Continue running
      window.requestAnimationFrame(this.loop.bind(this))
    }
  }
}
