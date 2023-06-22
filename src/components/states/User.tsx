import React from 'react'

type AuthUser = {
    name:string
    email:string
}

const User = () => {
    const [user,setUser] = React.useState<AuthUser | null>(null)


    // here we cant set the user name and email because we have set initial value of the user state as null when try to assign a user object we get error
    // so here we cant depend on the type interference we have to explicitly type the type of usestate hook
    // we specifiy the state type using angle bracket useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser({
            name:'vishwas',
            email:'vishwas@example.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={() => handleLogin()}>Login</button>
        <button onClick={() => handleLogout()}>Logout</button>
        <div>user name is {user?.name}</div>     
        <div>user email is {user?.email} </div>
    </div>
  )
}

export default User 


// type assertion

// const [user,setUser] = React.useState<AuthUser>({} as AuthUser)  

// if ther is only one value we can use type assertion when we use this their is no need of optional chaining for accessing the value


