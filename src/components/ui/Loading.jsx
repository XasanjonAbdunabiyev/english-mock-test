import React from "react"

import { Spinner } from "@chakra-ui/react"
export function PageLoading() {
    return (
        <section className="flex w-full items-center justify-center h-screen bg-blue-600">
            <Spinner
                speed="0.70s"
                emptyColor="white"
                color="blue.300"
                size="xl"
                thickness="3px"
            />
        </section>
    )
}
