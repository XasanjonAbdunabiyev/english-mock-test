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
    useToast,
} from "@chakra-ui/react"

import { useForm } from "react-hook-form"

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { FaUpload } from "react-icons/fa"
import { toastNotify } from "@/components/Commons/ToastNotify"
import { db, storage } from "@/firebase/config"
import { doc, updateDoc } from "firebase/firestore"

import { useQueryClient } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"

import { useUpdateModal } from "./useUpdateModal"

export const UpdateModal = memo(function ({ isOpen, onClose }) {
    const { onUpdateClose } = useUpdateModal()

    const { register, handleSubmit, reset } = useForm()

    const queryClient = useQueryClient()
    const [searchParams] = useSearchParams()

    const [audioFile, setAudioFile] = useState(null)
    const [audioUrl, setAudioUrl] = useState("")
    const [btnLoading, setBtnLoading] = useState(false)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setAudioFile(file)
    }

    let id = searchParams.get("questionId")

    const chakraToast = useToast()

    const handleUpload = async () => {
        if (audioFile) {
            const storageRef = ref(storage, `audio/${audioFile.name}`)
            const uploadTask = uploadBytesResumable(storageRef, audioFile)

            setBtnLoading(true)

            if (btnLoading === true) {
                const examplePromise = new Promise((resolve, _reject) => {
                    return setTimeout(() => resolve(200), 5000)
                })

                chakraToast.promise(examplePromise, {
                    success: {
                        title: "Upload audio file",
                        description: "Looks Great",
                    },
                    error: {
                        title: "Error uploading audio file",
                        description: "Something went wrong",
                    },
                    loading: {
                        title: "Uploading audio file",
                        description: "Please wait...",
                    },
                })
            }

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
        let newUpdateData = {
            question_title: data?.question_title,
            timeThink: parseInt(data?.timeThink),
            timeAnswer: parseInt(data?.timeAnswer),
            questionAudio: audioUrl,
        }

        const updateDocCollection = doc(db, "mock_tests", id)
        
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
    }

    return (
        <div className="update-data">
            <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Questions</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
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
                                Audio NI Oldingi qiymatini qaytarib olishni
                                iloji bo'lmadi
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
