import { RouterProvider } from "react-router-dom"

// Page Router
import { router } from "./pages-router"

export function RoutesProvider() {
    return <RouterProvider router={router} />
}
