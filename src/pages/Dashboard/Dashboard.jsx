import React, { lazy } from "react"

import { Box } from "@chakra-ui/react"
import { wait } from "../../services/wait"

const Layout = lazy(() =>
    import("../../layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)

const PageComponents = lazy(() =>
    wait(1000).then(
        () => import("../../components/(DashboardComponents)/index")
    )
)

export default function Dashboard() {
    return (
        <Box>
            <Layout>
                <PageComponents />
            </Layout>
        </Box>
    )
}
