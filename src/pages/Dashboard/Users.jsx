import { UsersTable } from "@/components/ui/Tables/UsersTable"
import { Layout } from "@/components/layouts/Layout"
import { Box, Heading } from "@chakra-ui/react"

import { useQuery } from "@tanstack/react-query"

import { getAllUsers } from "@/api/docs"
import { PageLoading } from "@/components/ui/Loading"

export default function Users() {
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
    })

    if (isError) {
        return (
            <Layout>
                <Box textAlign="center">
                    <Heading as="h1" fontSize="4xl">
                        Error
                    </Heading>
                    <p>{error.message}</p>
                </Box>
            </Layout>
        )
    }
    if (isLoading) {
        return <PageLoading />
    }

    return (
        <Box className="users">
            <Layout>
                <Heading fontSize={23}>Users Dashboard</Heading>
                <Box className="my-3">
                    <UsersTable tableData={data} />
                </Box>
            </Layout>
        </Box>
    )
}
