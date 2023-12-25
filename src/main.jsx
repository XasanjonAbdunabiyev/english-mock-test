import { ChakraProvider } from "@chakra-ui/react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import "./assets/styles/globals.css"
import { theme } from "./theme/config"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { BrowserRouter as Router } from "react-router-dom"

import { PaymentContextProvider } from "@/context/PaymentContext"

const rootElement = document.getElementById("root")
const queryClient = new QueryClient()

ReactDOM.createRoot(rootElement).render(
    <Router>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <PaymentContextProvider>
                    <App />
                </PaymentContextProvider>
            </QueryClientProvider>
        </ChakraProvider>
    </Router>
)
