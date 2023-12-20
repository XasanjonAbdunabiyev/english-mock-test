import React, { lazy } from "react"

import { Box } from "@chakra-ui/react"

const Layout = lazy(() =>
    import("../../layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)

import AudioUpload from "../../components/UI/AudioUpload";

const Dashboard = () => {
    return (
        <Box>
            <Layout>
                <AudioUpload />
            </Layout>
        </Box>
    )
}

export default Dashboard
