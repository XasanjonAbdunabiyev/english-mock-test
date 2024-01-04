import { Button, Text, Box, useToast } from "@chakra-ui/react"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { FaEdit } from "react-icons/fa"

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import { deleteDoc, doc } from "firebase/firestore"
import { db } from "@/firebase/config"

import { getQuestions } from "@/api/docs"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { Empty } from "@/components/ui/Empty"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { useGet } from "@/hooks/request/useGet"

export const DashboardSpeakingTable = () => {
    // Navigate to ...
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const toast = useToast()

    const { data } = useGet(["dashboard"], getQuestions)

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
    

    return (
        <Box className="flex items-center justify-between px-2">
            <Tabs className="w-full" variant="enclosed">
                <TabList>
                    <Tab>Part One</Tab>
                    <Tab>Part Two</Tab>
                    <Tab> PartThree</Tab>
                </TabList>
                <TabPanels>
                    {data?.map((panelTab) => {
                        return (
                            <Box key={panelTab?.id}>
                                <TabPanel>
                                    {panelTab?.part_one?.map((item) => {
                                        return (
                                            <div className="block">
                                                {item?.question_title}
                                            </div>
                                        )
                                    })}
                                </TabPanel>
                                <TabPanel>
                                    {panelTab?.part_two?.map((item) => {
                                        return (
                                            <div className="block">
                                                {item?.question_title}
                                            </div>
                                        )
                                    })}
                                </TabPanel>
                                <TabPanel>
                                    {panelTab?.part_three?.map((item) => {
                                        return (
                                            <div className="block">
                                                {item?.question_title}
                                            </div>
                                        )
                                    })}
                                </TabPanel>
                            </Box>
                        )
                    })}
                </TabPanels>
            </Tabs>
        </Box>
    )
}
