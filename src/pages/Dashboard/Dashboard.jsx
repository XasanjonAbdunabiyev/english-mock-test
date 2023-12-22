import React, { lazy } from "react"

import { Box } from "@chakra-ui/react"
import { wait } from "../../services/wait"

const AddSpeakingData = lazy(() =>
    wait(1000)
        .then(() => import("@/components/Containers/Dashboard/AddSpeakingData"))
        .then((module) => {
            return { default: module.AddSpeakingData }
        })
)

const DashboardSpeakingTable = lazy(() =>
    wait(1000).then(() =>
        import("@/components/Containers/Dashboard/DashboardSpeakingTable").then(
            (module) => {
                return { default: module.DashboardSpeakingTable }
            }
        )
    )
)

const Layout = lazy(() =>
    import("@/layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)



export default function Dashboard() {
    return (
        <Box>
            <Layout>
                <AddSpeakingData />
                <DashboardSpeakingTable />
            </Layout>
        </Box>
    )
}
