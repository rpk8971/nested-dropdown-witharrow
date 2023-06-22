import React, { useEffect, useRef } from 'react'



const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!) 
    // when we use null! we can call focus without optional chaining 

    useEffect(() => {
        inputRef.current?.focus()
    },[])

   return (
    <div>
        <input type='text' ref={inputRef
        } />
    </div>
  )
}

export default DomRef