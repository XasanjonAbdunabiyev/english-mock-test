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
import { Profile } from "@/pages/Profile"
import Tests from "@pages/__tests__/Tests"

import { RootOutlet } from "./RootOutlet"
import { ProtectedRoute } from "./ProtectedRoute"
import { CheckAdmin } from "./CheckAdmin"

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

                {/* Tests Page */}
                <Route path="/tests" element={<Tests />} />
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
