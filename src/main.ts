//import { studentIds, students } from './objects/objects'

import { gustavo } from './classes/classes'
import './style.css'
//import { age, id, name } from './types-basic/types-basic'

//types-basic.ts
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
// <h1>Hola mundo ${name} tu edad es: ${age} y tu id es: ${id}</h1>
// `

//objects.ts
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
// <h1>Hola mundo ${students}</h1>
// `

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hola mundo ${gustavo.age}</h1>
`

