import * as React from "react"
import {createContext, useState} from "react"

const defaultState = {
    isPro: false,
    setIsPro: () => {}
}

const UserContext = createContext(defaultState)

function UserProvider({children}) {
    const [isPro, setIsPro] = useState(false)
    return (
        <UserContext.Provider value={{
            isPro,
            setIsPro
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}