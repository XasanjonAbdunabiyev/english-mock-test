import { lazy } from "react"

const ChakraLogin = lazy(() =>
    import("../components/Auth/Login").then((module) => {
        return { default: module.Login }
    })
)
export const Login = () => {
    return (
        <div className="login-page">
            <ChakraLogin />
        </div>
    )
}
