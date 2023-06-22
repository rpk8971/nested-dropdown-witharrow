import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const User = () => {
    // const [user,setUser] = React.useState<AuthUser | null>(null)

    const userContext = useContext(UserContext)

   

    const handleLogin = () => {
        // here we have to check everytime userContext to use the userContext value this is because we specifiy null as the initial value of the cointext instead of this we can use type assertion when creating context  
        
        // if(userContext) {
        //     userContext.setUser({
        //         name:'vishwas',
        //         email:'vishwas@example.com'
        //     })
        // }
        userContext.setUser({
            name:'vishwas',
            email:'vishwas@example.com'
        })
        
    }

    const handleLogout = () => {
        // if(userContext) {
        //     userContext.setUser(null)
        // }

        // by using type assertion we can get rid of checking useContext everytime
        userContext.setUser(null)
    }
  return (
    <div>
        <div>
        <button onClick={() => handleLogin()}>Login</button>
        <button onClick={() => handleLogout()}>Logout</button>
        <div>user name is {userContext?.user?.name}</div>     
        <div>user email is {userContext?.user?.email} </div>
    </div>
    </div>
  )
}

export default User