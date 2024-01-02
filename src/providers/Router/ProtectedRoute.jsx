import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import { ROUTER_ACTIONS } from "./RouterActions"

export const ProtectedRoute = function () {
    let navigate = useNavigate()

    let user = localStorage.getItem("login_user")

    useEffect(() => {
        if (!user) {
            navigate(ROUTER_ACTIONS.LOGIN)
        } else {
            return <Outlet />
        }
    }, [])
}
