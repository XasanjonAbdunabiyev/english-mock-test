import React from "react"

import { Button, Input, Textarea, FormHelperText } from "@chakra-ui/react"

import { useForm } from "react-hook-form"
import { db } from "../../firebase/config"
import { addDoc, collection } from "firebase/firestore"

import { toast } from "react-toastify"

export const AddSpeakingData = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const main_questions_collection = collection(db, "mock_tests")

    const onSubmit = async (data) => {
        const addquestions_data = {
            question_title: data?.first_question,
            timeAnswer: parseInt(data?.timeAnswer),
            timeThink: parseInt(data?.timeThink),
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
            <Button type="submit" my={4}>
                Add Question
            </Button>
        </form>
    )
}
