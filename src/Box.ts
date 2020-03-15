import { Renderer2D } from './Renderer2D'
import { Vector2 } from './Vector2'

export class Box {
  protected _position:Vector2
  protected _width:number
  protected _height:number
  protected _color:string = 'blue'
  protected _moveTo:Vector2|null = null
  protected _moveSpeed = 1000

  constructor (
    position:Vector2,
    width:number,
    height:number,
    color:string = 'blue'
  ) {
    this._position = position
    this._width = width
    this._height = height
    this._color = color
  }

  set moveTo (target:Vector2) {
    this._moveTo = target
  }

  draw (renderer:Renderer2D) {
    renderer.drawRect(
      this._position.x,
      this._position.y,
      this._width,
      this._height,
      this._color
    )
  }

  onUpdate (deltaTime:number) {
    if (this._moveTo === null) {
      return
    }

    const distance:number = this._position.distance(this._moveTo)

    if (distance < 1) {
      this._moveTo = null
      return
    }

    this._position = this._position.moveTowards(
      this._moveTo,
      this._moveSpeed * deltaTime
    )
  }
}
