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
} from "@chakra-ui/react"

import { db, storage } from "@/firebase/config"
import { getDoc, doc } from "firebase/firestore"
import { useForm } from "react-hook-form"

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { FaUpload } from "react-icons/fa"
import { toastNotify } from "@/components/Commons/ToastNotify"

export const UpdateModal = memo(function ({ isOpen, onClose, questionId }) {
    const {
        register,
        handleSubmit,
    } = useForm()

    const [audioFile, setAudioFile] = useState(null)
    const [audioUrl, setAudioUrl] = useState("")
    const [btnLoading, setBtnLoading] = useState(false)

    const [previusQuestionData, setPreviusQuestionData] = useState({
        question_title: "",
        timeThink: "",
        timeAnswer: "",
    })

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setAudioFile(file)
    }

    const onSubmit = (data) => {
        console.log("previusQuestionData", previusQuestionData)
        console.log("current data", data)
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
                    setAudioUrl(downloadURL);
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

    console.log(audioUrl)

    useEffect(() => {
        const abortController = new AbortController()

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
                                {...register("first_question")}
                                className="my-3"
                                defaultValue={previusQuestionData?.question_title}
                            />
                            <Input
                                placeholder="Time to Answer"
                                className="my-3"
                                {...register("timeAnswer")}
                                defaultValue={previusQuestionData.timeAnswer}
                            />

                            <Input
                                placeholder="Time to Think"
                                defaultValue={previusQuestionData?.timeThink}
                                className="my-3"
                                {...register("timeThink")}
                            />

                            <div className="my-3 flex items-center gap-5">
                                <Input
                                    {...register("auidioUrl")}
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="audio/*"
                                />

                                <Button
                                    colorScheme="linkedin"
                                    onClick={handleUpload}
                                    isLoading={btnLoading}
                                    type="button"
                                    loadingText={"Audio file loaded"}
                                    leftIcon={<FaUpload />}
                                >
                                    Upload Audio
                                </Button>
                            </div>

                            <Button colorScheme={"red"} type="reset">
                                Reset Changes
                            </Button>
                            <Button type="submit" colorScheme={"green"}>
                                Update Questions
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
})
