import { lazy } from "react"

import { Box } from "@chakra-ui/react"

import { Layout } from "@/components/layouts/Layout"
import { wait } from "@/api/wait"

const Users = lazy(() =>
    wait(1000).then(() =>
        import("./Users").then((module) => {
            return { default: module.Users }
        })
    )
)

export default function Dashboard() {
    return (
        <Box>
            <Layout>
                <Users />
            </Layout>
        </Box>
    )
}
