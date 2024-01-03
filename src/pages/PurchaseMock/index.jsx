import { lazy } from "react"

import { Box } from "@chakra-ui/react"

import { wait } from "@/api/wait"

import { Layout } from "@/components/layouts/Layout"

const PurchaseMockTable = lazy(() =>
    wait(1000).then(() =>
        import("@/components/ui/Tables/PurchaseMockTable").then((module) => {
            return { default: module.PurchaseMockTable }
        })
    )
)

import { useGet } from "@/hooks/request/useGet"
import { getAllPurchaseMockQuestions } from "@/api/docs"
import { PageLoading } from "@/components/ui/Loading"

export default function PurchaseMock() {
    const { data, error, isError, isLoading } = useGet(["purchase-mock"], () =>
        getAllPurchaseMockQuestions()
    )

    if (isError) {
        console.error("PurchaseMock Error Fetch Failed", error.message)
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
        <Layout>
            <Box className="purchase_mock">
                <PurchaseMockTable tableData={data} />
            </Box>
        </Layout>
    )
}
