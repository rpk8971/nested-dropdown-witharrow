import React from 'react'

type Childrenprops = {
    children:string
}

const Heading = (props:Childrenprops) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Heading