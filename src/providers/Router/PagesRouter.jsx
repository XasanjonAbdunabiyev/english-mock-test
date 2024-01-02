import { lazy } from "react"

import { wait } from "@/api/wait"
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"

const HomePage = lazy(() => wait(1000).then(() => import("@/pages/Home")))

const DashboardPage = lazy(() =>
    wait(1000).then(() => import("@/pages/Dashboard/Dashboard"))
)

import { LoginPage } from "@/pages/Auth/LoginPage"
import { ErrorPage } from "./ErrorPage"
import { Register } from "@/pages/Auth/Register"

import { RootOutlet } from "./RootOutlet"
import { ProtectedRoute } from "./ProtectedRoute"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<RootOutlet />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Route>
            </Route>
        </>
    )
)
