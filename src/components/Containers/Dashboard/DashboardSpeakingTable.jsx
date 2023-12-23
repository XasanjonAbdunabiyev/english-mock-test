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
} from "@chakra-ui/react"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { FaEdit } from "react-icons/fa"

import { deleteDoc, doc } from "firebase/firestore"
import { db } from "@/firebase/config"

import { PageLoading } from "@/components/Commons/Loading"
import { toastNotify } from "@/components/Commons/ToastNotify"

import { dashboardSpeakingTable } from "@/db/dashboardSpeakingData"
import { wait } from "@/services/wait"

const UpdateModal = lazy(() =>
    wait(1000).then(() =>
        import("./UpdateModal").then((module) => {
            return { default: module.UpdateModal }
        })
    )
)

// -5 -7

import { useUpdateModal } from "./useUpdateModal"

export const DashboardSpeakingTable = () => {
    const [dashboardQuestions, setDashboardQuestions] = useState([])
    const [loading, setLoading] = useState(false)
    const { openUpdateModal, isUpdateOpen, onUpdateClose } = useUpdateModal()
    const [questionId, setQuestionId] = useState('')

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
                                                onClick={() => {
                                                    openUpdateModal()
                                                    setQuestionId(question?.id)
                                                }}
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

            <UpdateModal
                questionId={questionId}
                isOpen={isUpdateOpen}
                onClose={onUpdateClose}
            />
        </>
    )
}
