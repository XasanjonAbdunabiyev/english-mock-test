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
import { useGetAddSpeakingData } from "@/hooks/useGetAddSpeakingData"

export const UpdateModal = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm()

    const { questions_data, questionAudioUrl } = useGetAddSpeakingData()
    console.log(questionAudioUrl, questions_data)
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
                                placeholder="Question title"
                                className="my-3"
                            />
                            <Input
                                placeholder="Time to Answer"
                                className="my-3"
                                {...register("timeAnswer", { required: true })}
                            />
                            <Input
                                placeholder="Time to Answer"
                                className="my-3"
                                {...register("timeAnswer", { required: true })}
                            />
                            <div className="flex items-center gap-x-5">
                                <Button colorScheme={"red"} type="reset">
                                    {" "}
                                    Reset Changes
                                </Button>
                                <Button type="submit" colorScheme={"green"}>
                                    Update Questions
                                </Button>
                            </div>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}
