import React, { useEffect, useState } from "react"

import {
    Box,
    Button,
    Container,
    NumberInputField,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Textarea,
    NumberInput,
    NumberInputStepper,
    FormLabel,
    Input,
    useToast,
} from "@chakra-ui/react"

import { useNavigate, useParams } from "react-router-dom"

import { useQuery } from "@tanstack/react-query"
import { getQuestionById } from "@/api/docs"

import { doc, updateDoc } from "firebase/firestore"

import { useForm } from "react-hook-form"

import { PageNotFound } from "@/components/Views/PageNotFound"

import { GrUpdate } from "react-icons/gr"

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { db, storage } from "@/firebase/config"

export const UpdateQuestionDashboard = () => {
    /**
     * Get the single question
     */

    // toast hook 😂
    const toast = useToast()

    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["dashboardQuestions", parseInt(id)],
        queryFn: () => getQuestionById(id),
    })

    // Form Hooks

    const { handleSubmit, register, setValue, reset } = useForm()

    useEffect(() => {
        if (data) {
            Object.keys(data)?.forEach((key) => {
                setValue(key, data[key])
            })
        }
    }, [data, setValue])

    // Audio Upload Functions
    const [audioFile, setAudioFile] = useState(null)
    const [audioUrl, setAudioUrl] = useState("")

    const onFileChange = async (event) => {
        const file = event.target.files[0]
        setAudioFile(file)
    }

    const handleUplaoding = () => {
        //  Create an pendingPromise promise that resolves in 5s
        const pendingPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), 5000)
        })

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

                    toast.promise(pendingPromise, {
                        success: {
                            title: "Audio file changed successfully",
                            description: "Looks great",
                        },
                        error: {
                            title: "Rejecting upload",
                            description: "Something wrong",
                        },
                        loading: {
                            title: "Pending upload",
                            description: "Please wait",
                        },
                    })

                    setAudioUrl(downloadURL)
                }
            )
        }
    }

    // Form Submit Function and get Current Data
    const onSubmit = async (currentFormData) => {
        const updateDocCollection = doc(db, "mock_tests", id)
        if (
            currentFormData?.question_title &&
            currentFormData?.questionAudio &&
            currentFormData?.timeThink &&
            currentFormData?.timeAnswer
        ) {
            await updateDoc(updateDocCollection, {
                question_title: currentFormData?.question_title,
                timeThink: parseInt(currentFormData?.timeThink),
                timeAnswer: parseInt(currentFormData?.timeAnswer),
                questionAudio: audioUrl,
            }).then(() => {
                toast({
                    title: "success",
                    description: "Question Updated Successfully",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                })
                navigate("/dashboard")
            })
        } else {
            return toast({
                title: "Error",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
                description: "Please fill all the fields",
            })
        }
    }

    if (isLoading) {
        return <p className="font-bold my-4 text-lg">Loading...</p>
    }

    if (isError) {
        console.error(` Fetch Failted  ${error.message}`)
        return <PageNotFound />
    }

    return (
        <Box className="my-3">
            <Container>
                <Button my={2} onClick={() => navigate(-1)}>
                    Back to Dashboard Page
                </Button>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                    className="flex items-start gap-5 flex-col w-full"
                >
                    <Box className="w-full">
                        <FormLabel htmlFor="question_title">
                            Question title
                        </FormLabel>
                        <Textarea
                            {...register("question_title")}
                            id="question_title"
                        />
                    </Box>
                    <Box className="w-full">
                        <FormLabel>Time to Answer</FormLabel>
                        <NumberInput
                            max={50}
                            min={10}
                            {...register("timeAnswer")}
                            className="my-3"
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>

                    <Box className="w-full">
                        <FormLabel>Time to Think</FormLabel>
                        <NumberInput
                            {...register("timeThink")}
                            className="my-3"
                            max={50}
                            min={5}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>

                    <Box className="my-2 w-full">
                        <FormLabel>Select Audio File:</FormLabel>
                        <Input
                            type="file"
                            {...register("questionAudio")}
                            onChange={onFileChange}
                        />
                        <Button
                            my={2}
                            type="button"
                            onClick={() => handleUplaoding()}
                        >
                            Upload
                        </Button>
                    </Box>

                    <Box className="flex items-center gap-x-5 my-3">
                        <Button type="reset" onClick={() => reset()}>
                            Reset Changes
                        </Button>
                        <Button type="submit" leftIcon={<GrUpdate />}>
                            Submit
                        </Button>
                    </Box>
                </form>
            </Container>
        </Box>
    )
}
