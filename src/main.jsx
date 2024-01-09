// React DOM createRoot
import { createRoot } from "react-dom/client"
const container = document.getElementById("root")
let root = createRoot(container)

// Global style
import("./assets/styles/globals.css")

// Ui Provider
import { UiProvider } from "@/providers/UIProvider/UiProvider"

// Router Provider
import { RoutesProvider } from "@/providers/Router/RouterProvider"

// Query Provider
import QueryProvider from "./providers/Query/QueryClientProvider"

root.render(
    <UiProvider>
        <QueryProvider>
            <RoutesProvider />
        </QueryProvider>
    </UiProvider>
)
