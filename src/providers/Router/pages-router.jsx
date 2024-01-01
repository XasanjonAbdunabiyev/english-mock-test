import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"

import HomePage from "@/pages/Home"
import { LoginPage } from "@/pages/Auth/LoginPage"
import { ErrorPage } from "./ErrorPage"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<ErrorPage />} />
        </>
    )
)