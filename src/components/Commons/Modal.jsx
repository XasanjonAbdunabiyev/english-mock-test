import React, { memo } from "react"

import {
    Modal as ChakraUiModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const Modal = memo(function ({
    title,
    isOpen,
    onClose,
    children,
    navigateUrl,
    navigateTitle,
}) {
    const navigate = useNavigate()
    return (
        <ChakraUiModal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {children}
                    <Button
                        width="100%"
                        my={4}
                        colorScheme="green"
                        onClick={() => navigate(navigateUrl)}
                    >
                        {navigateTitle}
                    </Button>
                </ModalBody>
            </ModalContent>
        </ChakraUiModal>
    )
})
