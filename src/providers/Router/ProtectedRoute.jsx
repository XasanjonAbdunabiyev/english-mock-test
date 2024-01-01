import { Navigate } from "react-router-dom"
import { useAuth } from "@/hooks/auth/useAuth"

export const ProtectedRoute = function ({ children }) {
    const { user } = useAuth()
    if (!user) {
        // user is not authenticated
        return <Navigate to="/" />
    }
    return children
}
