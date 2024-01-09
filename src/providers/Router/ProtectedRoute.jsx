import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import { ROUTER_ACTIONS } from "./RouterActions"

import { useAuth } from "@/hooks/auth/useAuth"

export const ProtectedRoute = function () {
    let navigate = useNavigate()
    let { user } = useAuth()

    useEffect(() => {
        if (!user) {
            navigate(ROUTER_ACTIONS.LOGIN)
        }
    }, [user, navigate])

    return <Outlet />
}
