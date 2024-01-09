import React, { lazy } from "react"

import { wait } from "@/api/wait"
import { Box } from "@chakra-ui/react"
import { PageLoading } from "@/components/ui/Loading"
import { getQuestions } from "@/api/docs"

import { useQuery } from "@tanstack/react-query"
import { NotFound } from "./NotFound"

const Layout = lazy(() =>
    import("@/components/layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)

const SpeakingTable = lazy(() =>
    wait(1000).then(() =>
        import("@/components/ui/Tables/SpeakingTable").then((module) => {
            return { default: module.SpeakingTable }
        })
    )
)

const Speaking = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["speaking-panigation-table"],
        queryFn: getQuestions,
    })

    if (isLoading) {
        return <PageLoading />
    }

    if (isError) {
        return <NotFound />
    }

    return (
        <Box className="speaking-page">
            <Layout>
                <SpeakingTable speakingTabe={data} />
            </Layout>
        </Box>
    )
}

export default Speaking
