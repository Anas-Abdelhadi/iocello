import { Inject, Service } from "iocello";

import type { IPerson } from "./person";

export interface IPet {
    walk():void
}
// Pet class will be added to IoC, we use @Service here..
// note the tag param; this is used when dealing with the class in the IoC, a unique name (alias)
@Service({tag:'Pet'})
class Pet {
  // the Person class is also injected here, please note that this instance will be fetched from domain/scope 1
  // also note that we had to pass the tag as a param because we decided to customise the property name to person (all lower case in this example..)
  @Inject({tag:'Person',domain:1} ) person!: IPerson
  walk() {
    console.log('PET IS WALKING')
  }
  // all services need to provide an implementation of the dispose method, this is used for any clean up..
  dispose() {}
}

 export {Pet}

  