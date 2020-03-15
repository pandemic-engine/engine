export class Game {
  protected isRunning: boolean = false
  protected lastElapsedTime: number = 0
  protected deltaTime: number = 0
  protected maxDeltaTime: number = 3
  protected fps: number = 0
  protected runId: number|null = null

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

    if (this.isRunning === true) {
      // Continue running
      window.requestAnimationFrame(this.loop.bind(this))
    }
  }
}
