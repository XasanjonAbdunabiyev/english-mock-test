import React, { useState } from "react"

/** Chakra UI */
import { Button, Input, Textarea, useToast } from "@chakra-ui/react"

/** Firebase */
import { db, storage } from "@/firebase/config"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { addDoc, collection } from "firebase/firestore"
const main_questions_collection = collection(db, "mock_tests")

/** Toast */
import { toastNotify } from "@/components/Commons/ToastNotify"

/** Icons */
import { GrPowerReset } from "react-icons/gr"
import { TbBrandTelegram } from "react-icons/tb"
import { FaUpload } from "react-icons/fa"

import { useForm } from "react-hook-form"

import { useQueryClient } from "@tanstack/react-query"

export const AddSpeakingData = () => {
    const queryClient = useQueryClient()
    const [audioFile, setAudioFile] = useState(null)
    const [audioUrl, setAudioUrl] = useState("")
    const [btnLoading, setBtnLoading] = useState(false)

    const chakraToast = useToast()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setAudioFile(file)
    }

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
                    setBtnLoading(false)
                }
            )
        } else {
            setBtnLoading(false)
            console.error("No audio file selected")

            return toastNotify({
                title: "error",
                message: "error upload audio file",
            })
        }
    }

    const onSubmit = async (data) => {
        const addquestions_data = {
            question_title: data?.first_question,
            timeAnswer: parseInt(data?.timeAnswer),
            timeThink: parseInt(data?.timeThink),
            questionAudio: audioUrl,
        }

        await addDoc(main_questions_collection, addquestions_data)
            .then((_response) => {
                toastNotify({
                    title: "success",
                    message: "Question Added Successfully",
                })

                queryClient.invalidateQueries({
                    queryKey: ["dashboardQuestions"],
                })

                reset()
                setAudioUrl(null)
            })
            .catch((_error) => {
                console.error("Fetching Error", _error)
                toastNotify({
                    title: "error",
                    message: "Something went wrong",
                })
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Textarea
                resize={"none"}
                placeholder="Question name"
                className="my-3"
                {...register("first_question", { required: true })}
            />

            {errors.first_question && (
                <span className="font-bold text-red-500">
                    This is field reqiired
                </span>
            )}

            <Input
                className="my-3"
                {...register("timeThink", { required: true })}
                placeholder={"Enter question time to think"}
                type="number"
            />

            {errors.timeThink && (
                <span className="font-bold text-red-500">
                    This is field reqiired
                </span>
            )}

            <Input
                className="my-3"
                {...register("timeAnswer", { required: true })}
                placeholder={"Enter question time to answer"}
                type="number"
            />

            {errors.timeAnswer && (
                <span className="font-bold text-red-500 mx-5">
                    This is field reqiired
                </span>
            )}

            <div className="my-3 flex items-center gap-5">
                <Input
                    {...register("auidioUrl", { required: true })}
                    type="file"
                    onChange={handleFileChange}
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
                        btnLoading === true ? "Uploaded" : "Audio file loaded"
                    }
                    leftIcon={<FaUpload />}
                    isDisabled={Boolean(audioUrl) === true ? true : false}
                >
                    Upload Audio
                </Button>
            </div>

            {errors.auidioUrl && (
                <p className="block font-bold text-red-500">
                    This is audio required
                </p>
            )}

            <Button
                type="submit"
                my={4}
                rightIcon={<TbBrandTelegram />}
                colorScheme="linkedin"
            >
                Add Question
            </Button>

            <Button
                type="reset"
                mx={4}
                rightIcon={<GrPowerReset />}
                colorScheme="red"
            >
                Reset
            </Button>
        </form>
    )
}
