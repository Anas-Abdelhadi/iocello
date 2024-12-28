import type { IInjectable } from "corello"
import type { IPet } from "./pet"

export interface IPerson extends IInjectable {
    hello?:string
    semsem:IPet
  }