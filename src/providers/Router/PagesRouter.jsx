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

import { ROUTER_ACTIONS } from "./RouterActions"

import { LoginPage } from "@/pages/Auth/LoginPage"
import { ErrorPage } from "./ErrorPage"
import { Register } from "@/pages/Auth/Register"

import { RootOutlet } from "./RootOutlet"
import { ProtectedRoute } from "./ProtectedRoute"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<RootOutlet />}>
                <Route path={ROUTER_ACTIONS.HOME} element={<HomePage />} />
                <Route path={ROUTER_ACTIONS.LOGIN} element={<LoginPage />} />
                <Route path={ROUTER_ACTIONS.ERRORPAGE} element={<ErrorPage />} />
                <Route path={ROUTER_ACTIONS.REGISTER} element={<Register />} />
                <Route element={<ProtectedRoute />}>
                    <Route path={ROUTER_ACTIONS.DASHBOARD} element={<DashboardPage />} />
                </Route>
            </Route>
        </>
    )
)
