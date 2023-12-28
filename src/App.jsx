import { Suspense, lazy } from "react"
import { wait } from "./services/wait"
import { Outlet, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./routes/PrivateRoute"
import { PageLoading } from "@/components/Commons/Loading"

import "react-toastify/dist/ReactToastify.css"
import { Box } from "@chakra-ui/react"

const Home = lazy(() => wait(1000).then(() => import("./pages/Home")))
import { ToastContainer } from "@/components/Commons/ToastNotify"

const Login = lazy(() =>
    wait(1000).then(() =>
        import("./pages/Login").then((module) => {
            return { default: module.Login }
        })
    )
)

const SignUp = lazy(() =>
    import("@/pages/SignUp").then((module) => {
        return { default: module.SignUp }
    })
)

const Dashboard = lazy(() =>
    wait(1000).then(() => import("./pages/Dashboard/Dashboard"))
)

const Speaking = lazy(() =>
    wait(1000).then(() =>
        import("./pages/Speaking").then((module) => {
            return { default: module.Speaking }
        })
    )
)

import Test from "./pages/__tests__/Test"

const PurchaseMock = lazy(() =>
    wait(1000).then(() =>
        import("@/pages/PurchaseMock/index").then((module) => {
            return { default: module.PurchaseMock }
        })
    )
)

const PurchaseMockDashboard = lazy(() =>
    wait(1000).then(() =>
        import("@/pages/PurchaseMock/PurchaseMockDashboard").then((module) => {
            return { default: module.PurchaseMockDashboard }
        })
    )
)

const UpdateQuestionDashboard = lazy(() =>
    wait(1000).then(() =>
        import("@/pages/Dashboard/UpdateQuestionDashboard").then((module) => {
            return { default: module.UpdateQuestionDashboard }
        })
    )
)

export const App = () => {
    return (
        <Box className="root-wrapper">
            <Routes>
                <Route path="/" element={<LoadedPage />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/speaking" element={<Speaking />} />
                    <Route path="/purchase-mock" element={<PurchaseMock />} />
                    <Route
                        path="/purchase-mock-dashboard"
                        element={
                            <PrivateRoute>
                                <PurchaseMockDashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/dashboard/:id/edit"
                        element={
                            <PrivateRoute>
                                <UpdateQuestionDashboard />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
            <ToastContainer />
        </Box>
    )
}

function LoadedPage() {
    return (
        <Suspense fallback={<PageLoading />}>
            <Outlet />
        </Suspense>
    )
}
