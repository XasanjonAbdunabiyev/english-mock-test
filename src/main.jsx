// import { ChakraProvider } from "@chakra-ui/react"
// import * as ReactDOM from "react-dom/client"
// import "./assets/styles/globals.css"
// import { theme } from "./theme/config"

// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// import { BrowserRouter as Router } from "react-router-dom"
// import { App } from "./App"

// const rootElement = document.getElementById("root")

// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             refetchOnWindowFocus: false, // default is true
//             retry: 2,
//             refetchOnMount: true,
//         },
//     },
// })

// ReactDOM.createRoot(rootElement).render(
//     <Router>
//         <ChakraProvider theme={theme}>
//             <QueryClientProvider client={queryClient}>
//                 <App />
//             </QueryClientProvider>
//         </ChakraProvider>
//     </Router>
// )

// React DOM concept
import { createRoot } from "react-dom/client"
const container = document.getElementById("root")
let root = createRoot(container)

// Global style
import("./assets/styles/globals.css")

// App component
import { App } from "./App"
// Ui Provider
import { UiProvider } from "@/providers/UIProvider/UiProvider"

// Router Provider
import { RoutesProvider } from "@/providers/Router/RouterProvider"

root.render(
    <UiProvider>
        <RoutesProvider />
        <App />
    </UiProvider>
)
