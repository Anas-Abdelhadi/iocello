import type { IPerson, IPet } from './meta';
import { Inject, Service } from 'iocello';

import { service } from './base.service';

// another service named Person, and will have a tag `Person`, note that we can pass configuration for service, check the TS Type to learn more..
@Service({tag:'Person', domain:1})
class Person extends service implements IPerson {
  hello:string= "Hello! from domain 1"
  // this property is injected as well, in normal situations this will cause a circular dependency error, but the IoC will solve this for you..
  // note that the Pet property has a custom name `semsem`, also we need it to be specifically fetched from domain 1
  @Inject({domain:1,tag:'Pet'}) semsem!: IPet
   
}

export {Person} 