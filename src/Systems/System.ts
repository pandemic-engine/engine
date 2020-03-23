import { ComponentConstructor } from '../types/ComponentConstructor'
import { Entity } from '../Entity'

export abstract class System {
  public abstract components (): ComponentConstructor[]
  public abstract update (deltaTime: number, entities: Entity[]): void
}
