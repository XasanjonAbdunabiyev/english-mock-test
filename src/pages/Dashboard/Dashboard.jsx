import { lazy } from "react"

import { Box, Button } from "@chakra-ui/react"
import { wait } from "@/api/wait"
import { useNavigate } from "react-router-dom"


const DashboardSpeakingTable = lazy(() =>
    wait(1000).then(() =>
        import("@/components/shared/Dashboard/DashboardSpeakingTable").then(
            (module) => {
                return { default: module.DashboardSpeakingTable }
            }
        )
    )
)


import { FaUsers } from "react-icons/fa"
import { Layout } from "@/components/layouts/Layout"
import { AddSpeakingData } from "@/components/shared/Dashboard/AddSpeakingData"

import Users from "./Users"
export default function Dashboard() {
    const navigate = useNavigate()
    return (
        <Box>
            <Layout>
                {/* <Button
                    className="bg-gray-600 text-white"
                    leftIcon={<FaUsers />}
                    onClick={() => navigate("/dashboard/users")}
                >
                    Users dashboard
                </Button> */}
                {/* <AddSpeakingData />
                <DashboardSpeakingTable /> */}
                <Users/>
            </Layout>
        </Box>
    )
}
