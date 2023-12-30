import { lazy } from "react"

import { Box } from "@chakra-ui/react"
const ChakraLogin = lazy(() =>
    import("@/components/Containers/Auth/Login").then((module) => {
        return { default: module.Login }
    })
)
export const Login = () => {
    return (
        <Box className="login-page p-2">
            <ChakraLogin />
        </Box>
    )
}