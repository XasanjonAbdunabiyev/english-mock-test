import React from "react"

import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ navigateRoute = "/login", children }) => {
    const token = localStorage.getItem("token")

    if (token === null) {
        return <Navigate to={navigateRoute} />
    } else {
        return children
    }
}
