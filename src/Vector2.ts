export class Vector2 {
  protected _x:number = 0
  protected _y:number = 0

  constructor (x:number = 0, y:number = 0) {
    this._x = x
    this._y = y
  }

  static fromVector2 (position:Vector2) {
    return new Vector2(position.x, position.y)
  }

  get x ():number {
    return this._x
  }

  get y ():number {
    return this._y
  }

  distance (target:Vector2):number {
    const changeX:number = this.x - target.x
    const changeY:number = this.y - target.y

    return Math.sqrt(Math.pow(changeX, 2) + Math.pow(changeY, 2))
  }

  moveTowards (target:Vector2, step:number) {
    const changeX:number = target.x - this.x
    const changeY:number = target.y - this.y

    const distance:number = this.distance(target)

    const ratio:number = step / distance

    let newChangeX:number
    let newChangeY:number

    if (ratio >= 1) {
      newChangeX = changeX
      newChangeY = changeY
    } else {
      newChangeX = changeX * ratio
      newChangeY = changeY * ratio
    }

    return new Vector2(this.x + newChangeX, this.y + newChangeY)
  }
}
