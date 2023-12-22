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

import { useUpdateModal } from "@/components/Containers/Dashboard/useUpdateModal"
const DashboardQuestionUpdateModal = lazy(() =>
    import("@/components/Containers/Dashboard/UpdateModal").then((module) => {
        return { default: module.UpdateModal }
    })
)

export default function Dashboard() {
    const { isUpdateOpen, onUpdateClose } = useUpdateModal()

    return (
        <Box>
            <Layout>
                <AddSpeakingData />
                <DashboardSpeakingTable />
                <DashboardQuestionUpdateModal
                    isOpen={isUpdateOpen}
                    onClose={onUpdateClose}
                />
            </Layout>
        </Box>
    )
}
