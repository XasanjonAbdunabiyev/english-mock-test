import { IconButton, useColorMode } from "@chakra-ui/react"
import { FiSun, FiMoon } from "react-icons/fi"

export function ThemeButton() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            onClick={toggleColorMode}
            fontSize={22}
            color={colorMode === "dark" ? "white" : "white"}
            icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
        />
    )
}
