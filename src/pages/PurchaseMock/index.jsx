import React, { lazy } from "react"

import { Box } from "@chakra-ui/react"

import { wait } from "@/services/wait"

import { Layout } from "@/components/layouts/Layout"

const PurchaseMockTable = lazy(() =>
    wait(1000).then(() =>
        import("@/components/Commons/Tables/PurchaseMockTable").then(
            (module) => {
                return { default: module.PurchaseMockTable }
            }
        )
    )
)
export function PurchaseMock() {
    return (
        <Layout>
            <Box className="purchase_mock">
                <PurchaseMockTable />
            </Box>
        </Layout>
    )
}
