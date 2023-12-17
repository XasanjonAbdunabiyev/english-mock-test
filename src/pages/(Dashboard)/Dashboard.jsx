import { wait } from "../../services/wait"
import React, { lazy } from "react"

import { Box } from "@chakra-ui/react"

const DashboardComponent = lazy(() =>
    wait(1000).then(() => import("../../components/(Dashboard)/Dashboard"))
)

const Dashboard = () => {
    return (
        <Box>
            <DashboardComponent />
        </Box>
    )
}

export default Dashboard
