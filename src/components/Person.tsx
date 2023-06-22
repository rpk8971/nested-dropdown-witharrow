// import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
// we can also import types

import {Personprops} from "./person.types"


// type Personprops = {
//     name:{
//         first: string,
//         last:string
//     }
// }

const Person = (props:Personprops) => {
    
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}

export default Person