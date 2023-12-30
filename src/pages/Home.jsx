import { lazy, useContext } from "react"
import { useModal } from "@/hooks/modal-hooks/useModal"
import { Box, Heading, Text } from "@chakra-ui/react"
import { ScrollToTopButton } from "@/components/Commons/ScrollToTopButton"

import { Modal } from "@/components/Commons/Modal"
import { UserModalContext } from "@/context/UserModalContext"

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
    const { userOpen, userCloseModal } = useContext(UserModalContext);


    let loginUser = localStorage.getItem('login_user');
    let login_user_data = JSON.parse(loginUser);

    console.log(login_user_data);
    return (
        <Box>
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

            <Modal isOpen={userOpen} onClose={userCloseModal}>
                <Text fontSize={20}>Your Email Address: {login_user_data?.email} </Text>
                <Text fontSize={20}>Your App ID: {login_user_data?.apiKey} </Text>
            </Modal>

            <ScrollToTopButton />
        </Box>
    )
}
