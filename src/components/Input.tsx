import React, { ChangeEvent } from 'react'

type Inputprops = {
    value:string
    handleChange:(event: ChangeEvent<HTMLInputElement> ) => void
}

const Input = ({value,handleChange}:Inputprops) => {
    // if we pass in the component itself

    // const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
    //     console.log(event)

    // }
  return (
    <div>
        {/* <input type='text' value={props.value} onChange={(event) => props.handleChange(event)}  /> */}
        <input type='text' value={value} onChange={(event) => handleChange(event)}  />
        {/* <input type='text'  onChange={(event) => handleChange(event)}  /> */}
    </div>
    
  )
}

export default Input