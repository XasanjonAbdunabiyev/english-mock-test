import React, { memo } from 'react'

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export const Alert = memo(function ({ isOpen, onClose, children, title }) {
    const cancelRef = React.useRef();
    
    return (
        <AlertDialog
            isOpen={isOpen}
            onClose={onClose}
            leastDestructiveRef={cancelRef}
            motionPreset="slideInBottom"
            isCentered
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        <h3 className="text-2xl font-bold underline">
                            {title}
                        </h3>
                    </AlertDialogHeader>

                    <AlertDialogBody>{children}</AlertDialogBody>

                    <AlertDialogFooter>
                        <Button colorScheme="blue" onClick={onClose} ml={3}>
                            close
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
})
