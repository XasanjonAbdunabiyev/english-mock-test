import { ChakraProvider } from "@chakra-ui/react"

// chakra ui theme config
import { theme } from "./theme-config"

export function UiProvider({ children }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
