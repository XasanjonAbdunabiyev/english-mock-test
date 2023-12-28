import React, { useEffect } from "react"

import {
    Box,
    Button,
    Container,
    TableContainer,
    Table,
    Textarea,
    Input,
} from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom"

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getQuestionById } from "@/services/docs"

import {useForm } from "react-hook-form"

import { PageNotFound } from "@/components/Views/PageNotFound"

import { GrUpdate } from "react-icons/gr"

export const UpdateQuestionDashboard = () => {
    /**
     * Get the single question
     */

    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["dashboardQuestions", id],
        queryFn: () => getQuestionById(id),
    })

    // Form Hooks

    const { handleSubmit, register, setValue, control } = useForm()

    useEffect(() => {
        if (data) {
            Object.keys(data)?.forEach(key => {
               setValue(key, data[key])
            })
        }
    }, [data, setValue])

    const onSubmit = async (currentFormData) => {
        console.log(currentFormData)
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
                <Button colorScheme="green" my={2} onClick={() => navigate(-1)}>
                    Back to Dashboard Page
                </Button>

                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <Textarea {...register("question_title")} />
                    <Input {...register("timeAnswer")} className="my-3"/>
                    <Input {...register("timeThink")} className="my-3"/>
                    <Box>

                    </Box>
                    <Box className="flex items-center gap-x-5 my-3">
                        <Button type="reset" colorScheme="red">
                            Reset Changes
                        </Button>
                        <Button
                            type="submit"
                            leftIcon={<GrUpdate />}
                            colorScheme="green"
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
            </Container>
        </Box>
    )
}
