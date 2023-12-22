import React from "react"

import {
    Textarea,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    Button,
} from "@chakra-ui/react"

import { useForm } from "react-hook-form"
export const UpdateModal = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="update-data">
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Questions</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={() => handleSubmit(onSubmit)}>
                            <Textarea
                                {...register("first_question", {
                                    required: true,
                                })}
                            />
                            <Input
                                {...register("timeAnswer", { required: true })}
                            />
                            <Button type="submit">Update Questions</Button>
                            <Button type="reset"> Reset Changes</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}
