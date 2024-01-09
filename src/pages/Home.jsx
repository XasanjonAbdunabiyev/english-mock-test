import React from "react"

import { lazy } from "react"
import { useModal } from "@/hooks/modal-hooks/useModal"
import { Box } from "@chakra-ui/react"
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton"
import { FullImageCarousel } from "@/components/ui/FullImageCarousel"

const Alert = lazy(() =>
    import("@/components/ui/Message/Alert").then((module) => {
        return { default: module.Alert }
    })
)

const Layout = lazy(() =>
    import("../components/layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)

const Mock = lazy(() =>
    import("@/components/shared/Mock").then((module) => {
        return {
            default: module.Mock,
        }
    })
)

export default function Home() {
    const { isOpen, onClose } = useModal()

    return (
        <Box className="home">
            <Alert
                isOpen={isOpen}
                onClose={onClose}
                title="Welcome to Mock English Test"
            >
                <Box className="font-bold text-base m-2">
                    On this site, you can test your knowledge by taking an
                    English test
                </Box>
            </Alert>

            <Layout>
                <FullImageCarousel />
                <Mock />
            </Layout>

            <ScrollToTopButton />
        </Box>
    )
}
