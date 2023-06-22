import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

type PersonListprops = {
    names:{
        first:string,
        last:string
    }[]
}

const PersonList = (props:PersonListprops) => {
  return (
    <div>
      {
        props.names.map((item) => {
            return (
                <p>{item.first} {item.last} </p>
            )
        })
      }
    </div>
  )
}

export default PersonList