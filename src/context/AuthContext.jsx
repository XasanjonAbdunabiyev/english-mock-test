import { createContext } from "react"

// useLocalStorage
import { useLocalStorage } from "@/hooks/useLocalStorage"

export const AuthContext = createContext()

export default function AuthProvider() {
    const { getItem } = useLocalStorage()
    const user = getItem("login_user");
    
    return <AuthContext.Provider value={{}}></AuthContext.Provider>
}
