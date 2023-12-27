import React, { lazy } from "react"

import { wait } from "@/services/wait"


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

export const Speaking = () => {
    return (
        <div className="speaking-page">
            <Layout>
                <SpeakingTable />
            </Layout>
        </div>
    )
}
