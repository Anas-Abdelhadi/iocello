import './style.css'

import App from './App.vue'
import { Person } from './service/person'
import { Person as Person1 } from './service/person_x'
import { Pet } from './service/pet'
import { createApp } from 'vue'
import { ioc } from 'iocello'

//init ioc 
console.log("%cInitializing the IoC before app here..","color:lightblue;")
// if in webpack use context to get collection of files and pass it to loadServices..
//ioc.instance.loadServices
//N number of appContexts..
//Inversion of Control, setting the active domain will invert control at any given time..
ioc.instance.setContainerDomain(1)
ioc.add(Person)
ioc.add(Pet)
//invert the app context as well, meaning that registering any following classes will happen in a different context
//ioc.instance.setAppContext("x")
ioc.add(Person1)

createApp(App).mount('#app')