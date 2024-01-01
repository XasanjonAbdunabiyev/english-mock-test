import { lazy, useContext } from "react"
import { useModal } from "@/hooks/modal-hooks/useModal"
import { Box,  Text } from "@chakra-ui/react"
import { ScrollToTopButton } from "@/components/Commons/ScrollToTopButton"

import { Modal } from "@/components/Commons/Modal"

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

import { FaRegCopy } from "react-icons/fa6"

export default function Home() {
    const { isOpen, onClose } = useModal()

    let loginUser = localStorage.getItem("login_user")
    let login_user_data = JSON.parse(loginUser)

    let login_user_password = localStorage.getItem("register_user")
    let password = JSON.parse(login_user_password)

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

            <Modal
                navigateUrl="/purchase-mock"
                navigateTitle="Purchase Mock"
                isOpen={userOpen}
                size="lg"
                onClose={userCloseModal}
            >
                <Text fontSize={16} className="my-3">
                    <span className="font-bold">Your Email Address</span>:{" "}
                    {login_user_data?.email}
                </Text>
                <Text fontSize={16} className="my-3">
                    <span className="font-bold">Your App ID</span>:
                    <span>{" " + login_user_data?.apiKey}</span>
                </Text>

                <Text className="my-3">
                    <span className="font-bold">Your Password</span>:
                    {"  " + password?.userPassword}
                </Text>
            </Modal>

            <ScrollToTopButton />
        </Box>
    )
}
