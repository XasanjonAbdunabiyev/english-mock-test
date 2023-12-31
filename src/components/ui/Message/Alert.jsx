import React, { memo } from "react"

import {
    AlertDialog,
    Box,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from "@chakra-ui/react"

export const Alert = memo(function ({ isOpen, onClose, children, title }) {
    const cancelRef = React.useRef()
    return (
        <Box className="mx-5">
            <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
                leastDestructiveRef={cancelRef}
                motionPreset="slideInBottom"
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent className="m-2">
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            <h3 className="text-lg font-bold underline">
                                {title}
                            </h3>
                        </AlertDialogHeader>

                        <AlertDialogBody>{children}</AlertDialogBody>

                        <AlertDialogFooter>
                            <Button onClick={onClose} ml={3}>
                                close
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    )
})
