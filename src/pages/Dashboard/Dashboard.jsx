import React, { lazy } from "react"

import { Box, Button } from "@chakra-ui/react"
import { wait } from "@/api/wait"
import { useNavigate } from "react-router-dom"

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
    import("@/components/layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)

import { FaUsers } from "react-icons/fa"

export default function Dashboard() {
    const navigate = useNavigate()
    return (
        <Box>
            <Layout>
                <Button
                    leftIcon={<FaUsers />}
                    onClick={() => navigate("/dashboard/users")}
                >
                    Users dashboard
                </Button>
                <AddSpeakingData />
                <DashboardSpeakingTable />
            </Layout>
        </Box>
    )
}
