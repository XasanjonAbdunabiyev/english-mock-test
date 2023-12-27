import React, { useEffect, useState, memo } from "react"

import {
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Input,
    ModalHeader,
    Button,
    Heading,
} from "@chakra-ui/react"

import { useForm } from "react-hook-form"

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { FaUpload } from "react-icons/fa"
import { toastNotify } from "@/components/Commons/ToastNotify"
import { db, storage } from "@/firebase/config"
import { doc, updateDoc } from "firebase/firestore"

import { useQueryClient, useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"

import { useUpdateModal } from "./useUpdateModal"
import { getQuestionById } from "@/services/docs"

export const UpdateModal = memo(function ({ isOpen, onClose }) {

    const { onUpdateClose } = useUpdateModal()
    
    const [searchParams] = useSearchParams()
    
    let id = searchParams.get("questionId")

    const { data: prevQuestions } = useQuery({
        queryKey: [id],
        queryFn: () => getQuestionById(id),
    })

    const { register, handleSubmit, reset } = useForm({
        defaultValues: async () => {
            return prevQuestions
        },
    })

    console.log(prevQuestions)

    const queryClient = useQueryClient()

    const [audioFile, setAudioFile] = useState(null)
    const [audioUrl, setAudioUrl] = useState("")
    const [btnLoading, setBtnLoading] = useState(false)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setAudioFile(file)
    }

    const handleUpload = async () => {
        if (audioFile) {
            const storageRef = ref(storage, `audio/${audioFile.name}`)
            const uploadTask = uploadBytesResumable(storageRef, audioFile)

            uploadTask.on(
                "state_changed",
                (_snapshot) => {},
                (error) => {
                    console.error("Error uploading audio file", error)
                },
                async () => {
                    const downloadURL = await getDownloadURL(
                        uploadTask.snapshot.ref
                    )
                    setAudioUrl(downloadURL)
                    toastNotify({
                        title: "success",
                        message: "Audio file uploaded",
                    })
                }
            )
        } else {
            setBtnLoading(false)
            toastNotify({
                title: "warning",
                message: "So the audio file doesn't change 🤔",
            })
            console.error("Not audio file selected")
        }
    }

    const onSubmit = async (data) => {
        // const updateDocCollection = doc(db, "mock_test", )
        // updateDoc()

        const updateDocCollection = doc(db, "mock_tests", id)

        if (
            Boolean(data?.question_title && data?.timeThink && data?.timeAnswer)
        ) {
            let newUpdateData = {
                question_title: data?.question_title,
                timeThink: parseInt(data?.timeThink),
                timeAnswer: parseInt(data?.timeAnswer),
                questionAudio: audioUrl,
            }
            await updateDoc(updateDocCollection, newUpdateData).then(() => {
                toastNotify({
                    title: "success",
                    message: "Question Updated Successfully",
                })
                queryClient.invalidateQueries({
                    queryKey: ["dashboardQuestions"],
                })

                onUpdateClose()
                reset()
            })
        } else {
            let newUpdateData = {
                question_title: prevQuestions?.question_title,
                timeThink: parseInt(prevQuestions?.timeThink),
                timeAnswer: parseInt(prevQuestions?.timeAnswer),
                questionAudio: audioUrl,
            }

            await updateDoc(updateDocCollection, newUpdateData).then(() => {
                toastNotify({
                    title: "success",
                    message: "Updated",
                });

                queryClient.invalidateQueries({
                    queryKey: ["dashboardQuestions"],
                })

                onUpdateClose()
                reset()
            })
        }
    }

    return (
        <div className="update-data">
            <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Questions</ModalHeader>

                    <ModalCloseButton />
                    <ModalBody>
                        <Heading my={3} fontSize={16}>
                            There may be problems in restoring previously
                            written data
                        </Heading>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            autoComplete="off"
                        >
                            <Textarea
                                {...register("question_title")}
                                className="my-3"
                                placeholder="Question Title"
                            />
                            <Input
                                placeholder="Time to Answer"
                                className="my-3"
                                type="number"
                                {...register("timeAnswer")}
                            />

                            <Input
                                placeholder="Time to Think"
                                className="my-3"
                                type="number"
                                {...register("timeThink")}
                            />

                            <label htmlFor="audioLabel">
                                Unable to restore audio to Previous value
                            </label>
                            <div className="my-3 flex items-center gap-5">
                                <Input
                                    {...register("questionAudio")}
                                    type="file"
                                    onChange={handleFileChange}
                                    id="audioLabel"
                                    accept="audio/*"
                                />

                                <Button
                                    colorScheme="linkedin"
                                    onClick={handleUpload}
                                    isLoading={btnLoading}
                                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                    _active={{
                                        bg: "#dddfe2",
                                        transform: "scale(0.98)",
                                        borderColor: "#bec3c9",
                                    }}
                                    _focus={{
                                        boxShadow:
                                            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                    }}
                                    loadingText={
                                        btnLoading === true
                                            ? "Uploaded"
                                            : "Audio file loaded"
                                    }
                                    leftIcon={<FaUpload />}
                                    isDisabled={
                                        Boolean(audioUrl) === true
                                            ? true
                                            : false
                                    }
                                >
                                    Upload Audio
                                </Button>
                            </div>
                            <div className="flex items-center gap-x-5">
                                <Button colorScheme={"red"} type="reset">
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
