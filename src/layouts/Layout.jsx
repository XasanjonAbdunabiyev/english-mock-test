import React, { lazy } from "react"
import { Box, Container } from "@chakra-ui/react"
const PageHeader = lazy(() =>
    import("./PageHeader").then((module) => {
        return {
            default: module.PageHeader,
        }
    })
)

const Footer = lazy(() =>
    import("../layouts/Footer").then((module) => {
        return { default: module.Footer }
    })
)

export const Layout = ({ children }) => {
    return (
        <Box className="main_layout">
            <PageHeader />
            <Container
                maxW="container.xl"
                className="pages"
                overflow={"hidden"}
            >
                {children}
                <Footer />
            </Container>
        </Box>
    )
}
