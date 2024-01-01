import { useLocation, Navigate } from "react-router-dom"

export function RequireAuth({ children }) {
    let { user } = useAuth()
    let location = useLocation()

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    } else {
        return children
    }
}
