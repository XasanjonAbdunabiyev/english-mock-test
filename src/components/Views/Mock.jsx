import { lazy } from "react"

import { Heading, Image, StackDivider, VStack } from "@chakra-ui/react"
import mock_ielts from "../assets/images/mock_ielts.jpg"
import { wait } from "../../services/wait"

const MockTable = lazy(() =>
    wait(1000).then(() =>
        import("../UI/Tables/MockTable").then((module) => {
            return { default: module.MockTable }
        })
    )
)

import { Modal } from "../Commons/Modal"
import { useSpeakingModal } from "../../hooks/useSpeakingModal"
import { usePaymentModal } from "../../hooks/usePaymentModal"

export const Mock = () => {
    const { isOpen, onClose } = useSpeakingModal()
    const { onPaymentClose, isPaymentOpen } = usePaymentModal()

    return (
        <div className="my-[36px]">
            <Heading mt={6} mb={6} as="h4" size="lg" textAlign="center">
                IELTS MOCK TESTS
            </Heading>
            <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
            >
                <Image src={mock_ielts} alt="mock_test" />
                <MockTable />
                <Modal
                    navigateUrl={"/speaking"}
                    isOpen={isOpen}
                    navigateTitle="Enter"
                    onClose={onClose}
                    title="Login to take the test"
                >
                    <p>
                        As soon as you log in, your profile will be opened. You
                        can follow the test results from your profile.
                    </p>
                </Modal>

                <Modal
                    title="This mock test is not free"
                    key={"20"}
                    onClose={onPaymentClose}
                    isOpen={isPaymentOpen}
                >
                    <b>
                        To access this Mock Test you will have to pay the
                        prescribed fee
                    </b>
                </Modal>
            </VStack>
        </div>
    )
}