import { lazy, useContext } from "react"
import {
    Button,
    Container,
    useColorMode,
    Box,
    IconButton,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Logo = lazy(() =>
    import("@/components/Commons/Logo").then((module) => {
        return { default: module.Logo }
    })
)
import { CgProfile } from "react-icons/cg";

import { ThemeButton } from "@/components/Commons/ThemeButton"

export const PageHeader = () => {
    const navigate = useNavigate()
    const { colorMode } = useColorMode()
    const loginUser = localStorage.getItem("login_user")

    return (
        <header
            className={`p-4 ${
                colorMode === "dark" && "bg-gray-500"
            } bg-opacity-25 backdrop-blur-xl sticky top-0 left-0 w-full z-50 border-b mb-5`}
        >
            <Container maxW="container.xl">
                <Box className="flex justify-between items-center">
                    <Box className="logo">
                        <Logo />
                    </Box>
                    <nav className="flex items-center gap-x-6">
                        {loginUser ? (
                            <IconButton
                                fontSize={25}
                                icon={<CgProfile />}
                                
                            />
                        ) : (
                            <Button
                                colorScheme="telegram"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </Button>
                        )}

                        <ThemeButton />
                    </nav>
                </Box>
            </Container>
        </header>
    )
}
