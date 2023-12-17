import React, { lazy, useMemo } from "react"
import { useGetDocs } from "../hooks/useGetDocs"
const Layout = lazy(() =>
    import("../layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)

const SpeakingTable = lazy(() =>
    import("../components/SpeakingTable").then((module) => {
        return { default: module.SpeakingTable }
    })
)

export const Speaking = () => {
    const { loading, questions } = useGetDocs()
    if (loading) return <p>Loading...</p>
    return (
        <div className="speaking-page">
            <Layout>
                <SpeakingTable questions={questions} />
            </Layout>
        </div>
    )
}
