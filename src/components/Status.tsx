// import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

type Statusprops = {
    // status:string
    // it will take any random string to restrict to particulare strings wed use intersection of string literrals
    status: 'loading' | 'success' | 'error' 
    
    
    // we can we number also in union of intersection 
    // status: 'loading' | 'success' | 'error' | 34
}

const Status = (props:Statusprops) => {
    let message:string | undefined;
    if (props.status === 'loading') {message= 'loading'}
    else if(props.status=== 'success') {message = 'Data fetched successfully'}
    else if (props.status === 'error') {message = "error fetching data" }
  return (
    <div>Status {message}</div>
  )
}

export default Status