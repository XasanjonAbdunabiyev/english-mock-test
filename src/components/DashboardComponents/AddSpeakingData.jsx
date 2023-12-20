import React, { useState } from "react"

/** Chakra UI */
import { Button, Input, Textarea } from "@chakra-ui/react"

/** Firebase */
import { db } from "../../firebase/config"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { addDoc, collection } from "firebase/firestore"
import { storage } from "../../firebase/config"
const main_questions_collection = collection(db, "mock_tests")

/** Toast */
import { toast } from "react-toastify"

/** Icons */ import { GrPowerReset } from "react-icons/gr"
import { TbBrandTelegram } from "react-icons/tb"

// ** Hook Form for CRUD
import { useForm, Controller } from "react-hook-form"
export const AddSpeakingData = () => {
    const [audioFile, setAudioFile] = useState(null)
    const [audioUrl, setAudioUrl] = useState("")

    const {
        register,
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

            uploadTask.on(
                "state_changed",
                (error) => {
                    console.error("Error uploading audio file", error)
                },
                async () => {
                    const downloadURL = await getDownloadURL(
                        uploadTask.snapshot.ref
                    )
                    setAudioUrl(downloadURL)
                }
            )
        } else {
            console.error("No audio file selected")
        }
    }

    const onSubmit = async (data) => {
        const addquestions_data = {
            question_title: data?.first_question,
            timeAnswer: parseInt(data?.timeAnswer),
            timeThink: parseInt(data?.timeThink),
            questionAudio: audioUrl ? audioUrl : "",
        }

        await addDoc(main_questions_collection, addquestions_data)
            .then((response) => {
                console.log(response)
                toast.success("New Question Added successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            })
            .catch((error) => {
                console.log(error)
                toast.error("Something went wrong", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                    draggable: true,
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
                type="text"
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
                type="text"
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
                    onChange={(e) => handleFileChange(e)}
                    accept="audio/*"
                />

                {errors.auidioUrl && (
                    <span className="font-bold text-500-red">
                        This is field required
                    </span>
                )}
            </div>

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
