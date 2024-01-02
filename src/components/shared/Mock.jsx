import { lazy } from "react"

import { Heading, Image, Box, Text } from "@chakra-ui/react"
import mock_ielts from "@/assets/images/mock_ielts.jpg"
import { wait } from "@/api/wait"

const MockTable = lazy(() =>
    wait(1000).then(() =>
        import("@/components/ui/Tables/MockTable").then((module) => {
            return { default: module.MockTable }
        })
    )
)

import { Modal } from "@/components/ui/Message/Modal"
import { useSpeakingModal } from "@/hooks/modal-hooks/useSpeakingModal"
import { usePaymentModal } from "@/hooks/modal-hooks/usePaymentModal"

export const Mock = () => {
    const { isOpen, onClose } = useSpeakingModal()
    const { onPaymentClose, isPaymentOpen } = usePaymentModal()

    const appId = JSON.parse(localStorage.getItem("login_user"))?.apiKey;

    return (
        <Box className="my-[36px]">
            <Heading mt={6} mb={6} as="h4" size="lg" textAlign="center">
                IELTS MOCK TESTS
            </Heading>

            <Image src={mock_ielts} alt="mock_test" my={3} mb={5} />
            <MockTable />

            <Modal
                navigateUrl="/speaking"
                isOpen={isOpen}
                navigateTitle="Enter"
                size="md"
                onClose={onClose}
                title="Login to take the test"
            >
                <Text className="text-lg">
                    As soon as you log in, your profile will be opened. You can
                    follow the test results from your profile.
                </Text>
            </Modal>

            <Modal
                title="This mock test is not free"
                onClose={onPaymentClose}
                isOpen={isPaymentOpen}
                navigateTitle="Get payment id"
                navigateUrl={appId ? "/purchase-mock" : "/not-found"}
            >
                <Text className="text-lg">
                    To access this Mock Test you will have to pay the prescribed
                    free
                </Text>
            </Modal>
        </Box>
    )
}
