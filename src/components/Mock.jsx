import { Heading, Image, StackDivider, VStack } from "@chakra-ui/react"
import mock_ielts from "../assets/images/mock_ielts.jpg"
import { MockTable } from "./MockTable"

import { Modal } from "./UI/Modal"
import { useSpeakingModal } from "../hooks/useSpeakingModal"

export const Mock = () => {
    const { isOpen, onClose } = useSpeakingModal()
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
            </VStack>
        </div>
    )
}
