import React, { useState } from 'react'

const LoggedIn = () => {
    const [isLoggedin,setIsLoggedin] = useState(false)

    const handleLogin = () => {
        setIsLoggedin(true)
    }
    const handleLogout = () => {
        setIsLoggedin(false)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>LogOut</button>
        {isLoggedin ? 'you are logged in' : 'you are logged out'}
    </div>
  )
}

export default LoggedIn