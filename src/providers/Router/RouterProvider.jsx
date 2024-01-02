import { RouterProvider } from "react-router-dom"

// Page Router
import { router } from "./PagesRouter"

export function RoutesProvider() {
    return <RouterProvider router={router} />
}
