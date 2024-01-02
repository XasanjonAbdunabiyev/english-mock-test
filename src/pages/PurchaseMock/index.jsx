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
export default function PurchaseMock() {
    return (
        <Layout>
            <Box className="purchase_mock">
                <PurchaseMockTable />
            </Box>
        </Layout>
    )
}
