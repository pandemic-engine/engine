import { Engine } from '../src/Engine'
import { MovementSystem } from '../src/Systems/MovementSystem'
import { TransformComponent } from '../src/Components/TransformComponent'

declare global {
  interface Window {
    engine: any
  }
}

const engine = new Engine()

engine.createEntity().addComponent(new TransformComponent(12, 20))
engine.createEntity()

engine.addSystem(new MovementSystem())

window.engine = engine
