import React, { lazy } from "react"

import { Box } from "@chakra-ui/react"
import { wait } from "../../services/wait"

import { AddSpeakingData } from "../../components/Commons/Dashboard/AddSpeakingData"
import { DashboardSpeakingTable } from "../../components/Commons/Dashboard/DashboardSpeakingTable"

const Layout = lazy(() =>
    import("../../layouts/Layout").then((module) => {
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
