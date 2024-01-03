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

const UsersDashboard = lazy(() =>
    wait(1000).then(() => import("@/pages/Dashboard/Users"))
)

const PurchaseMock = lazy(() =>
    wait(1000).then(() => import("@/pages/PurchaseMock/index"))
)

const SpeakingPage = lazy(() =>
    wait(1000).then(() => import("@/pages/Speaking"))
)

import { ROUTER_ACTIONS } from "./RouterActions"

import { LoginPage } from "@/pages/Auth/LoginPage"
import { Register } from "@/pages/Auth/Register"

import { RootOutlet } from "./RootOutlet"
import { ProtectedRoute } from "./ProtectedRoute"
import { CheckAdmin } from "./CheckAdmin"
import { Profile } from "@/pages/Profile"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<RootOutlet />}>
                <Route path={ROUTER_ACTIONS.HOME} element={<HomePage />} />
                <Route path={ROUTER_ACTIONS.LOGIN} element={<LoginPage />} />
                <Route path={ROUTER_ACTIONS.REGISTER} element={<Register />} />

                <Route element={<ProtectedRoute />}>
                    <Route
                        path={ROUTER_ACTIONS.PURCHASEMOCK}
                        element={<PurchaseMock />}
                    />
                    <Route
                        path={ROUTER_ACTIONS.ACCOUNT}
                        element={<Profile />}
                    />
                </Route>

                <Route
                    path={ROUTER_ACTIONS.SPEAKING}
                    element={<SpeakingPage />}
                />

                {/* Dashboards Route */}
                <Route element={<CheckAdmin />}>
                    <Route
                        path={ROUTER_ACTIONS.USERSDASHBOARD}
                        element={<UsersDashboard />}
                    />
                    <Route
                        path={ROUTER_ACTIONS.DASHBOARD}
                        element={<DashboardPage />}
                    />
                </Route>
            </Route>
        </>
    )
)
