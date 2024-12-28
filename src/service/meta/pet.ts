import type { IInjectable } from "corello"
import type { IPerson } from "./person"

export interface IPet extends IInjectable {
    person:IPerson
    walk():void
}