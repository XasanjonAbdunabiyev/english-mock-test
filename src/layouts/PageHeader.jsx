import { lazy } from "react"
import { Button, Container, useColorMode } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Logo = lazy(() =>
    import("@/components/Commons/Logo").then((module) => {
        return { default: module.Logo }
    })
)


export const PageHeader = () => {
    const navigate = useNavigate()
    const { colorMode } = useColorMode()

    return (
        <header
            className={`p-4 ${
                colorMode === "dark" && "bg-gray-500"
            } bg-opacity-25 backdrop-blur-xl sticky top-0 left-0 w-full z-50 border-b mb-5`}
        >
            <Container maxW="container.xl">
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <Logo />
                    </div>
                    <nav className="flex items-center gap-x-6">
                        <Button
                            colorScheme="telegram"
                            color="white"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                    </nav>
                </div>
            </Container>
        </header>
    )
}
