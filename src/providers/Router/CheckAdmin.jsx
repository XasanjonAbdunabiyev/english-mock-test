import { Outlet, Navigate } from "react-router-dom"

import { ROUTER_ACTIONS } from "./RouterActions"

export const CheckAdmin = () => {
    let token = localStorage.getItem("token")
    if (!token) {
        return <Navigate to={ROUTER_ACTIONS.LOGIN} />
    } else {
        return <Outlet />
    }
}
