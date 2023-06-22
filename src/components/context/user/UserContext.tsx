import React, { createContext, useState } from 'react'

type AuthUser = {
    name:string,
    email:string
}

type UsercontextType = {
    user:AuthUser | null,
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}


type UserContextProviderProps = {
    children:React.ReactNode
}

// export const UserContext = createContext<UsercontextType | null>(null) 
// ***** using type assertion ******
export const UserContext = createContext({} as UsercontextType) 

export const UserContextProvider = ({children}:UserContextProviderProps ) => {
    const [user,setUser] = useState<AuthUser | null>(null)

    return <UserContext.Provider value={{user,setUser}}>
        {children }
    </UserContext.Provider>

}

// we assingned context value as null in line 13 when we created context but in context provider we are providing value this will flag a error
// to resolve the error we need to specifiy the type of the context value