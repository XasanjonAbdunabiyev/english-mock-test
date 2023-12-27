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
import { SpeakingPaginationContextProvider } from "./context/SpeakingPaginationContext"
const rootElement = document.getElementById("root")

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default is true
            retry: 2,
            refetchOnMount: true,
        },
    },
})

ReactDOM.createRoot(rootElement).render(
    <Router>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <PaymentContextProvider>
                    <SpeakingPaginationContextProvider>
                        <App />
                    </SpeakingPaginationContextProvider>
                </PaymentContextProvider>
            </QueryClientProvider>
        </ChakraProvider>
    </Router>
)
