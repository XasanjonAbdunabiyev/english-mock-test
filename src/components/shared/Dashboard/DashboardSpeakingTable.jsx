import React, { lazy } from "react"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
    TableContainer,
    Button,
    Box,
    Wrap,
    useToast,
} from "@chakra-ui/react"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { FaEdit } from "react-icons/fa"

import { deleteDoc, doc } from "firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { db } from "@/firebase/config"

import { dashboardSpeakingTable } from "@/db/dashboardSpeakingData"

import { getQuestions } from "@/api/docs"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { Empty } from "@/components/ui/Empty"

export const DashboardSpeakingTable = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const toast = useToast()
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ["dashboardQuestions"],
        queryFn: getQuestions,
    })

    if (isLoading) {
        return <p className="font-bold my-4 text-lg">Loading...</p>
    }

    if (isError) {
        console.error(`Error ${error.message}`)
        return <Empty />
    }

    const handleDeleteQuestion = async (id) => {
        try {
            await deleteDoc(doc(db, "mock_tests", id)).then(() => {
                toast({
                    title: "Question Deleted Successfully",
                    status: "success",
                })
            })
            queryClient.invalidateQueries({ queryKey: ["dashboardQuestions"] })
        } catch (error) {
            toast({
                status: "error",
                title: "Something went wrong",
                description: `${error.message}`,
            })
        }
    }

    return (
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
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                navigate(
                                                    `/dashboard/${question?.id}/edit`
                                                )
                                            }
                                            rightIcon={<FaEdit />}
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
    )
}
