import React,{useReducer} from 'react'



type CounterState = {
    count:number
}

// let use discriminated union
type UpdateAction =  {
    type: 'increment' | 'decrement' , 
    payload:number
}

type ResetAction = {
    type:  'reset'

}

// type CounterAction = {
//     // type: string,
//     // payload?:number
    
// }

type CounterAction =  UpdateAction | ResetAction





const initialstate = {count:0}

const reducer = (state: CounterState,action:CounterAction) => {
    switch(action.type) {
        case 'increment':
            // return {count:state.count + (action.payload || 0) } this will work 
            return {count:state.count + (action.payload || 0) }
    
        case 'decrement':
            return {count:state.count - action.payload }
        default :
        return state

}
}
const Counter = () => {
    const [state,dispatch] = useReducer(reducer,initialstate)

// if we want to pass this state and dispatch as prop to the child component just hover on the state and dipatch copy the the vs code shows on the hover and use it
    
  return (
    <div>Counter : {state.count}
    <div>
        <button onClick={() => dispatch({type:'increment',payload:10})}>increment 10</button>
        <button onClick={() => dispatch({type:'decrement',payload:10})}>decrement 10</button>
        <button onClick={() => dispatch({type:'reset'})}>reset</button>
    </div>
    </div>
  )
}

export default Counter