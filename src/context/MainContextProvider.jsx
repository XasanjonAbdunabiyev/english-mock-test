import React from "react"


import { SpeakingPaginationContextProvider } from "./SpeakingPaginationContext"
export default function MainContextProvider({ children }) {
    return (
        <SpeakingPaginationContextProvider>
            {children}
        </SpeakingPaginationContextProvider>
    )
}
