import { UsersTable } from "@/components/Commons/Tables/UsersTable"
import { Layout } from "@/layouts/Layout"
import { Box, Heading } from "@chakra-ui/react"

export function Users() {
    return (
        <Box className="users">
            <Layout>
                <Heading fontSize={23}>Users Dashboard</Heading>
                <Box className="my-3">
                    <UsersTable />
                </Box>
            </Layout>
        </Box>
    )
}
