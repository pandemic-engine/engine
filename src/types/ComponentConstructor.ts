import { Component } from '../Components/Component'

export type ComponentConstructor = { new (...args: any[]): Component }
