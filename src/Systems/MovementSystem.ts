import { ComponentConstructor } from '../types/ComponentConstructor'
import { Entity } from '../Entity'
import { System } from './System'
import { TransformComponent } from '../Components/TransformComponent'

export class MovementSystem extends System {
  public components (): ComponentConstructor[] {
    return [ TransformComponent ]
  }

  public update (deltaTime: number, entities: Entity[]): void {
    entities.forEach(entity => {
      const transform = entity.getComponent(TransformComponent)

      if (transform) {
        transform.x = transform.x + 1
        transform.y = transform.y + 2
      }
    })
  }
}
