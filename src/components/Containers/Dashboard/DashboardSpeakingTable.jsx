import React, { useEffect, useState, lazy, useMemo } from "react"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
    Heading,
    TableContainer,
    Button,
    Box,
    Wrap,
} from "@chakra-ui/react"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { FaEdit } from "react-icons/fa"

import { deleteDoc, doc } from "firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { db } from "@/firebase/config"

import { toastNotify } from "@/components/Commons/ToastNotify"

import { dashboardSpeakingTable } from "@/db/dashboardSpeakingData"
import { wait } from "@/services/wait"

const NotFoundPage = lazy(() =>
    wait(1000).then(() =>
        import("@/components/Views/PageNotFound").then((module) => {
            return { default: module.NotFound }
        })
    )
)

import { getQuestions } from "@/services/docs"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

export const DashboardSpeakingTable = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { data, error, isError, isLoading } = useQuery({
        queryKey: ["dashboardQuestions"],
        queryFn: getQuestions,
    })

    if (isLoading) {
        return <p className="font-bold my-4 text-lg">Loading...</p>
    }

    if (isError) {
        console.error(`Error ${error.message}`)
        return <NotFoundPage />
    }

    const handleDeleteQuestion = async (id) => {
        try {
            await deleteDoc(doc(db, "mock_tests", id)).then(() => {
                toastNotify({
                    title: "success",
                    message: "Question Deleted Successfully",
                })
            })
            queryClient.invalidateQueries({ queryKey: ["dashboardQuestions"] })
        } catch (error) {
            toastNotify({
                title: "error",
                message: "Error deleting 🗑",
            })
        }
    }

    return (
        <>
            <TableContainer my={8}>
                <Table>
                    <Thead>
                        <Tr>
                            {dashboardSpeakingTable?.map((item) => (
                                <Th
                                    fontSize={20}
                                    fontWeight="bold"
                                    textAlign="center"
                                    key={item.id}
                                >
                                    {item.title}
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((question) => {
                            return (
                                <Tr key={question?.id}>
                                    <Td>
                                        <Box className="flex items-center flex-col justify-center">
                                            <Wrap className="break-all">
                                                {question?.question_title}
                                            </Wrap>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box className="flex items-center justify-center flex-col">
                                            {question?.timeThink} secound
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box className="flex items-center justify-center flex-col">
                                            {question?.timeAnswer} secound
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box className="flex items-center justify-center gap-5">
                                            <Button
                                                onClick={() =>
                                                    handleDeleteQuestion(
                                                        question?.id
                                                    )
                                                }
                                                leftIcon={<RiDeleteBin5Fill />}
                                                colorScheme="red"
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                onClick={() => navigate(`/dashboard/${question?.id}/edit`)}
                                                rightIcon={<FaEdit />}
                                                colorScheme="green"
                                            >
                                                Update
                                            </Button>
                                        </Box>
                                    </Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}
