import React, { useEffect, useRef, useState } from 'react'

const MutableRef = () => {
    const [timer,setTimer] = useState(0)
    const intervalRef = useRef<number | null>(null)

    const stopTimer = () => {
       if(intervalRef.current) window.clearInterval(intervalRef.current)
    }

    useEffect(() => {
        // set interval returns a numeric value only but we have the intrevalref to null only lets fix this
        intervalRef.current = window.setInterval(() => {
            setTimer((timer)=> timer+1)
        },1000)

        return () => {stopTimer()} 
    },[])

  return (
    <div>
        HookTimer - {timer}
        <button onClick={() => stopTimer()}>StopTimer</button>
    </div>
  )
}

export default MutableRef


// for dom references specifiy dom element type
// for mutuable references  specify the appropriate type in this case null and number because setinterval returns a id which is a number stored in Intervalref 


// while passing component as a prop we use React.ComponentType