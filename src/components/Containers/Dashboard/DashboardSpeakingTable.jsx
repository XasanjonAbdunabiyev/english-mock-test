import React from "react"
import { useGetDocs } from "@/hooks/useGetDocs"
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

export const DashboardSpeakingTable = () => {
    const { questions } = useGetDocs()

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
                    {questions?.map((question) => {
                        console.log(question)
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
