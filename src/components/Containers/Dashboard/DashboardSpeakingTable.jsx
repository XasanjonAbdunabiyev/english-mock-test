import React, { useEffect, useState } from "react"
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
} from "@chakra-ui/react"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { FaEdit } from "react-icons/fa"

import { deleteDoc, doc } from "firebase/firestore"
import { db } from "@/firebase/config"

import { PageLoading } from "@/components/Commons/Loading"
import { toastNotify } from "@/components/Commons/ToastNotify"

export const DashboardSpeakingTable = () => {
    const [dashboardQuestions, setDashboardQuestions] = useState([])
    const [loading, setLoading] = useState(false)

    if (loading) {
        return <PageLoading />
    }

    useEffect(() => {
        const abortController = new AbortController()
        try {
            setLoading(true)
            import("@/services/docs.js").then((module) => {
                module.getQuestions().then((data) => {
                    setDashboardQuestions(data)
                })
            })
            setDashboardQuestions()
        } catch (_error) {
            console.error("Fetch Failed", "internet connection")
        } finally {
            setLoading(false)
        }

        return () => {
            /**
             * Clean Up logic, if needed
             */
            abortController.abort()
        }
    }, [])

    const handleDeleteQuestion = async (id) => {
        try {
            await deleteDoc(doc(db, "mock_tests", id)).then(() => {
                toastNotify({
                    title: "success",
                    message: "Question Deleted Successfully",
                })
            })
            setDashboardQuestions(
                dashboardQuestions?.filter((question) => question.id !== id)
            )
        } catch (error) {
            toastNotify({
                title: "error",
                message: "Error deleting 🗑",
            })
        }
    }

    return (
        <TableContainer my={8}>
            <Table>
                <Thead>
                    <Tr>
                        <Th fontSize={20} textAlign="center" fontWeight="bold">
                            Question title
                        </Th>
                        <Th fontSize={20} textAlign="center" fontWeight="bold">
                            Time to think
                        </Th>
                        <Th fontSize={20} textAlign="center" fontWeight="bold">
                            Time to answer
                        </Th>
                        <Th fontSize={20} textAlign="center" fontWeight="bold">
                            Crud information
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {dashboardQuestions?.map((question) => {
                        return (
                            <Tr key={question?.id}>
                                <Td>
                                    <div className="flex items-center flex-col justify-center">
                                        <Heading as="h3" fontSize={20}>
                                            {question?.question_title}
                                        </Heading>
                                    </div>
                                </Td>
                                <Td>
                                    <div className="flex items-center justify-center flex-col">
                                        {question?.timeThink} secound
                                    </div>
                                </Td>
                                <Td>
                                    <div className="flex items-center justify-center flex-col">
                                        {question?.timeAnswer} secound
                                    </div>
                                </Td>
                                <Td>
                                    <div className="flex items-center justify-center gap-5">
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
                                            rightIcon={<FaEdit />}
                                            colorScheme="green"
                                        >
                                            Update
                                        </Button>
                                    </div>
                                </Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
