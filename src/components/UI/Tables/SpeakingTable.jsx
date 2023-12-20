import React, { lazy, memo, useState } from "react"

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
    Box,
    Button,
} from "@chakra-ui/react"
import { CiWarning } from "react-icons/ci"
import { TbClockHour3 } from "react-icons/tb"

const AudioPlay = lazy(() =>
    import("../AudioPlay").then((module) => {
        return { default: module.AudioPlay }
    })
)

const ITEMSPERPAGE = 1 /**## Number of question per page */

function Pagination({ data }) {
    const [currentPage, setCurrentPage] = useState(1)
    // Calculate the range of items to display on the current page
    const indexOfLastItem = currentPage * ITEMSPERPAGE
    const indexOfFirstItem = indexOfLastItem - ITEMSPERPAGE
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // Generate page numbers
    const pageNumbers = Array.from(
        { length: Math.ceil(data.length / ITEMSPERPAGE) },
        (_, index) => index + 1
    );
    

    return (
        <div className="speaking__table">
            {currentItems?.map((question) => {
                return (
                    <div className="questions_table" key={question?.id}>
                        <div className="my-5">
                            <AudioPlay src={question?.questionAudio} />
                        </div>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th
                                        textAlign="center"
                                        fontSize={25}
                                        fontWeight="bold"
                                    >
                                        Time to think
                                    </Th>
                                    <Th
                                        fontSize={25}
                                        textAlign="center"
                                        fontWeight="bold"
                                    >
                                        Question
                                    </Th>
                                    <Th
                                        fontSize={25}
                                        textAlign="center"
                                        fontWeight="bold"
                                    >
                                        Time to answer
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <div className="flex items-center justify-center flex-col">
                                            <CiWarning
                                                fontSize={40}
                                                className="mb-3"
                                            />
                                            {question?.timeThink}
                                        </div>
                                    </Td>

                                    <Td>
                                        <div className="flex items-center justify-center flex-col">
                                            <Heading fontSize={20}>
                                                {question?.question_title}
                                            </Heading>
                                        </div>
                                    </Td>

                                    <Td>
                                        <div className="flex items-center justify-center flex-col">
                                            <TbClockHour3
                                                fontSize={40}
                                                className="mb-3"
                                            />
                                          {question?.timeAnswer}
                                        </div>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </div>
                )
            })}
            <Box textAlign={"right"} my={4}>
                {pageNumbers.map((number) => (
                    <Button
                        key={number}
                        variant={number === currentPage ? "solid" : "outline"}
                        onClick={() => handlePageChange(number)}
                        mx={1}
                    >
                        {number}
                    </Button>
                ))}
            </Box>
        </div>
    )
}

export const SpeakingTable = memo(function ({ questions }) {
    return (
        <>
            <TableContainer className="my-5">
                <Pagination data={questions} />
            </TableContainer>
        </>
    )
})
