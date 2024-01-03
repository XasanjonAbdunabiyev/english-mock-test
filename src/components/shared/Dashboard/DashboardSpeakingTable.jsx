import { Button, Text, Box, useToast } from "@chakra-ui/react"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { FaEdit } from "react-icons/fa"

import { deleteDoc, doc } from "firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { db } from "@/firebase/config"

import { getQuestions } from "@/api/docs"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { Empty } from "@/components/ui/Empty"

export const DashboardSpeakingTable = () => {
    // Navigate to ...
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
        <Box className="flex items-center justify-between px-2">
            {data?.map(() => {
                return <></>
            })}
        </Box>
    )
}
