import { createBrowserRouter } from "react-router-dom"

import Home from "@/pages/Home"
import { Login } from "@/pages/Auth/Login"
import { ErrorPage } from "./ErrorPage"

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Home />,
    },

    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
    },
])
