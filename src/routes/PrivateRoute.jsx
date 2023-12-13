import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = ({ navigateRoute = '/login' }) => {
    const token = localStorage.getItem('token')
    if (!token) {
        return <Navigate to={navigateRoute} />
    } else {
        <Outlet />
    }
}
