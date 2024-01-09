import { IconButton, useColorMode } from "@chakra-ui/react"
import { FiSun, FiMoon } from "react-icons/fi"

export function ThemeButton() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <IconButton
            onClick={toggleColorMode}
            className="border"
            fontSize={22}
            icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
        />
    )
}
