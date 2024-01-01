import React from "react"

import { lazy } from "react"
import { useModal } from "@/hooks/modal-hooks/useModal"
import { Box } from "@chakra-ui/react"
import { ScrollToTopButton } from "@/components/Commons/ScrollToTopButton"

const Alert = lazy(() =>
    import("../components/Commons/Alert").then((module) => {
        return { default: module.Alert }
    })
)

const Layout = lazy(() =>
    import("../layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)

const Carousel = lazy(() =>
    import("../components/Commons/Carousel").then((module) => {
        return {
            default: module.Carousel,
        }
    })
)

const Mock = lazy(() =>
    import("../components/Views/Mock").then((module) => {
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
                <Carousel />
                <Mock />
            </Layout>

            <ScrollToTopButton />
        </Box>
    )
}
