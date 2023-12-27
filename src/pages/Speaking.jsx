import React, { lazy } from "react"

import { wait } from "@/services/wait"

import { PageLoading } from "@/components/Commons/Loading"

const Layout = lazy(() =>
    import("@/layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)

const SpeakingTable = lazy(() =>
    wait(1000).then(() =>
        import("@/components/Commons/Tables/SpeakingTable").then((module) => {
            return { default: module.SpeakingTable }
        })
    )
)

import { useQuery } from "@tanstack/react-query"
import { getQuestions } from "@/services/docs"
import { PageNotFound } from "@/components/Views/PageNotFound"

export const Speaking = () => {
    const {
        data: questions,
        isError,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["skeaking-table"],
        queryFn: getQuestions,
    })

    if (isError) {
        console.error(`Speaking Page error ${error.message}`)
        return <PageNotFound />
    }
    
    if (isLoading) {
        return <PageLoading />
    }

    return (
        <div className="speaking-page">
            <Layout>
                <SpeakingTable questions={questions} />
            </Layout>
        </div>
    )
}
