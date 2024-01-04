import React, { useState } from "react"

/** Chakra UI */
import { Box, Button, Input, Textarea, useToast } from "@chakra-ui/react"

/** Firebase */
import { db, storage } from "@/firebase/config"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import {
    addDoc,
    arrayUnion,
    collection,
    setDoc,
    updateDoc,
    doc,
} from "firebase/firestore"
const main_questions_collection = collection(db, "mock_tests")

/** Icons */
import { GrPowerReset } from "react-icons/gr"
import { TbBrandTelegram } from "react-icons/tb"
import { FaUpload } from "react-icons/fa"

import { useForm } from "react-hook-form"

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getQuestionById } from "@/api/docs"

export const AddSpeakingData = () => {
    const queryClient = useQueryClient()
    const [audioFile, setAudioFile] = useState(null)
    const [audioUrl, setAudioUrl] = useState("")
    const [btnLoading, setBtnLoading] = useState(false)

    const [partChanges, setPartChanges] = useState("part_one")
    let [counter, setCounter] = useState(0)
    const [partQuestions, setPartQuestions] = useState({
        part_one: [],
        part_two: [],
        part_three: [],
    })

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

    // Handle file Upload
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
            chakraToast({
                duration: 2000,
                title: "Uploading error audio",
                description: "Please upload audio file",
                status: "error",
                isClosable: true,
            })
        }
    }

    // Handle Select Part Questions
    const handleSelectChange = (event) => {
        // Selected part changes
        setPartChanges(event?.target?.value)
    }

    const onSubmit = async (data) => {
        const addquestions_data = {
            question_title: data?.first_question,
            timeAnswer: parseInt(data?.timeAnswer),
            timeThink: parseInt(data?.timeThink),
            questionAudio: audioUrl,
        }

        const currentPart = partChanges

        setPartQuestions((prevQuestions) => ({
            ...prevQuestions,
            [currentPart]: [...prevQuestions[currentPart], addquestions_data],
        }))

        // Post questions to the database
        const newQuestionsObject = {
            [currentPart]: [...partQuestions[currentPart], addquestions_data],
        }
        await postQuestionsByPartChanges(newQuestionsObject)

        setCounter((prev) => prev + 1)
    }

    async function postQuestionsByPartChanges(newQuestions) {
        await addDoc(main_questions_collection, newQuestions)
            .then((_response) => {
                chakraToast({
                    title: "Question Added Successfully",
                    status: "success",
                    isClosable: true,
                    duration: 3000,
                })

                queryClient.invalidateQueries({
                    queryKey: ["dashboardQuestions"],
                })

                localStorage.setItem("dashboardQuestionsId", _response.id)
                reset()
                setAudioUrl(null)
            })
            .catch((_error) => {
                console.error("Fetching Error", _error)
                chakraToast({
                    status: "error",
                    title: "Something went wrong",
                })
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {/* Select Part Question */}
            <Box my={5}>
                <select
                    onChange={handleSelectChange}
                    className="py-3 px-4 border border-gray-300 pe-9 block w-full rounded-lg text-lg focus:border-blue-500 font-bold focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                >
                    <option value="part_one">Question Part One</option>
                    <option value="part_two">Question Part Two</option>
                    <option value="part_three">Question Part Three</option>
                </select>
            </Box>
            {/* Select Part Question */}

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
            {/* Question title */}

            {/* Time to think */}
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
            {/* Time to think */}

            {/* Time Answer */}
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
            {/* Time Answer */}

            {/* Audio file Input */}
            <Box className="my-3 flex items-center gap-5">
                <Input
                    {...register("auidioUrl", { required: true })}
                    type="file"
                    onChange={handleFileChange}
                    accept="audio/*"
                />

                {errors.auidioUrl && (
                    <span className="font-bold text-red-500 mx-5">
                        This is field reqiired
                    </span>
                )}

                {/* Upload Audio Button */}
                <Button
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
                {/* Upload Audio Button */}
            </Box>

            {errors.auidioUrl && (
                <p className="block font-bold text-red-500">
                    This is audio required
                </p>
            )}

            <Button type="submit" my={4} rightIcon={<TbBrandTelegram />}>
                Add Question
            </Button>

            <Button type="reset" mx={4} rightIcon={<GrPowerReset />}>
                Reset
            </Button>
        </form>
    )
}
