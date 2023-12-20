import { Button, useColorMode } from "@chakra-ui/react"
import { FiSun, FiMoon } from "react-icons/fi"

export function ThemeButton() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button
            colorScheme="facebook"
            onClick={toggleColorMode}
            color={colorMode === "dark" ? "white" : "white"}
        >
            {colorMode === "light" ? <FiSun /> : <FiMoon />}
        </Button>
    )
}
