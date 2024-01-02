import React from "react"

import AuthProvider from "./AuthContext"

import { SpeakingPaginationContextProvider } from "./SpeakingPaginationContext"
export default function MainContextProvider({ children }) {
    return (
        <SpeakingPaginationContextProvider>
            <AuthProvider>{children}</AuthProvider>
        </SpeakingPaginationContextProvider>
    )
}
