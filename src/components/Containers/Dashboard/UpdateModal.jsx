import React, { useEffect, useState, memo } from "react"

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

import { db } from "@/firebase/config"
import { getDoc, doc } from "firebase/firestore"
import { useForm } from "react-hook-form"

export const UpdateModal = memo(function ({ isOpen, onClose, questionId }) {
    const { register, handleSubmit } = useForm()
    const [previusQuestionData, setPreviusQuestionData] = useState([])

    const onSubmit = (data) => {
        console.log(data)
    }

    useEffect(() => {
        const abortController = new AbortController()

        console.log("render")
        const fetchData = async () => {
            const docRef = doc(db, "mock_tests", questionId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setPreviusQuestionData(docSnap.data())
            } else {
                console.log("no data available")
            }
        }

        fetchData()

        return () => {
            abortController.abort()
        }
    }, [questionId])

    console.log(previusQuestionData)

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
})
