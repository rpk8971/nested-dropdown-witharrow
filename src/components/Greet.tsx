import React from 'react'

type Greetprops = {
    name:string
    // to make the messageCount as optional we use ? for optoinal prop 
    messageCount?:number
    isLoggedIn:boolean
}

// we can use interface also but use type whil;e building applications

// interface Greetprops {
//     name:string
// }
    
     



const Greet = (props:Greetprops) => {
    // assigning default value
    const {messageCount = 0} = props
  return (
    <div>
    
        {props.isLoggedIn ? `Hello ${props.name} you have ${props.messageCount} unread messages` : 'Welcome guest' }
        </div>
    
    
  )
}

export default Greet