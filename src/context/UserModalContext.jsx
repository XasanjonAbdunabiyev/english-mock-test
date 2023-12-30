import { createContext, useState } from "react"

export const UserModalContext = createContext()

export function UserModalContextProvider({ children }) {
    const [userOpen, setUserOpen] = useState(false)

    const userCloseModal = () => setUserOpen(false)
    const onModalUser = () => setUserOpen(true)

    return (
        <UserModalContext.Provider
            value={{
                userCloseModal, 
                onModalUser,
                userOpen,
            }}
        >
            {children}
        </UserModalContext.Provider>
    )
}
