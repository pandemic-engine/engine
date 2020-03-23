import { Component } from './Components/Component'
import { ComponentConstructor } from './types/ComponentConstructor'

export class Entity {
  protected _id: string
  protected _components: Component[] = []

  constructor (id: string) {
    this._id = id
  }

  get id () {
    return this._id
  }

  addComponent (component: Component): this {
    this._components.push(component)
    return this
  }

  getComponent <T extends Component>(type: { new (...args: any[]): T }): T | null {
    const cmpt: Component | undefined = this._components.find(
      (item: Component) => item instanceof type
    )

    if (cmpt instanceof type) {
      return cmpt
    } else {
      return null
    }
  }

  hasComponent <T extends Component>(type: ComponentConstructor): boolean {
    return this._components.some(component => component instanceof type)
  }
}
