import { Button, Text, Box, useToast } from "@chakra-ui/react"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { FaEdit } from "react-icons/fa"

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import { deleteDoc, doc } from "firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { db } from "@/firebase/config"

import { getQuestionById } from "@/api/docs"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { Empty } from "@/components/ui/Empty"
import { useLocalStorage } from "@/hooks/useLocalStorage"

export const DashboardSpeakingTable = () => {
    // Navigate to ...
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { getItem } = useLocalStorage()
    const toast = useToast()
    let latestQuestionId = getItem("dashboardQuestionsId")

    const { data, isError, isLoading } = useQuery({
        queryKey: ["dashboardQuestions"],
        queryFn: () => getQuestionById(latestQuestionId?.id),
    })

    if (isLoading) {
        return <p className="font-bold my-4 text-lg">Loading...</p>
    }


    // Handle Delete Question
    const handleDeleteQuestion = async (id) => {
        try {
            await deleteDoc(doc(db, "mock_tests", id)).then(() => {
                toast({
                    title: "Question Deleted Successfully",
                    status: "success",
                })
            })
            queryClient.invalidateQueries({ queryKey: ["dashboard"] })
        } catch (error) {
            toast({
                status: "error",
                title: "Something went wrong",
                description: `${error.message}`,
            })
        }
    }

    let changes = latestQuestionId?.partChanges

    if (changes === data?.changes) {
        console.log(changes)
    }

    return (
        <Box className="flex items-center justify-between px-2">
            <Tabs className="w-full" variant="enclosed">
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel></TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
