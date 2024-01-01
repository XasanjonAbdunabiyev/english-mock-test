import { lazy } from "react"

import { Box } from "@chakra-ui/react"
const ChakraLogin = lazy(() =>
    import("@/components/shared/Auth/Login").then((module) => {
        return { default: module.Login }
    })
)

export const LoginPage = () => {
    return (
        <Box className="login-page p-2">
            <ChakraLogin />
        </Box>
    )
}
