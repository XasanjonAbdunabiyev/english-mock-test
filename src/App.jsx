import { Suspense, lazy } from "react"
import { wait } from "./services/wait"
import { Outlet, Route, Routes,  } from "react-router-dom"
import { PrivateRoute } from "./routes/PrivateRoute"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const Home = lazy(() => wait(1000).then(() => import("./pages/Home")))

const Login = lazy(() =>
    wait(1000).then(() =>
        import("./pages/Login").then((module) => {
            return { default: module.Login }
        })
    )
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

export const App = () => {
    return (
        <div className="root-wrapper">
            <Routes>
                <Route path="/" element={<LoadedPage />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/speaking" element={<Speaking />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

function LoadedPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
        </Suspense>
    )
}