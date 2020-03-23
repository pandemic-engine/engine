import { ComponentConstructor } from './types/ComponentConstructor'
import { Entity } from './Entity'
import { System } from './Systems/System'
import { v4 as uuid } from 'uuid'

export class Engine {
  protected _entities: Entity[] = []
  protected _systems: System[] = []

  createEntity (): Entity {
    const entity = new Entity(uuid())
    this._entities.push(entity)
    return entity
  }

  addSystem (system: System): this {
    this._systems.push(system)
    return this
  }

  tick () {
    this._systems.forEach(system => {
      let entities = [ ...this._entities ]

      system.components().forEach((Cmpt: ComponentConstructor): void => {
        if (entities.length) {
          entities = entities.filter(entity => {
            return entity.hasComponent(Cmpt)
          })
        }
      })

      system.update(1000, entities)
    })
  }
}
