import React from 'react'


// ReactNode type for jxs props 
type Oscarprops = {
    children:React.ReactNode
}

const Oscar = (props:Oscarprops) => {
  return (
    <div>Oscar goes to {props.children}</div>
  )
}

export default Oscar