import React, { memo, useState } from 'react'

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
} from '@chakra-ui/react'
import { CiWarning } from 'react-icons/ci'
import { TbClockHour3 } from 'react-icons/tb'

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
    )

    return (
        <>
            {currentItems?.map((question) => {
                console.log(question)
                return (
                    <Table key={question?.id}>
                        <Thead>
                            <Tr>
                                <Th fontSize={25} fontWeight="bold">
                                    Time to think
                                </Th>
                                <Th fontSize={25} fontWeight="bold">
                                    Question
                                </Th>
                                <Th fontSize={25} fontWeight="bold">
                                    Time to answer
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <CiWarning fontSize={40} className="mb-3" />
                                    <Heading fontSize={18}>
                                        {question?.timeThink} second
                                    </Heading>
                                </Td>

                                <Td>
                                    <Heading fontSize={20}>
                                        {question?.question_title}
                                    </Heading>
                                </Td>

                                <Td>
                                    <TbClockHour3
                                        fontSize={40}
                                        className="mb-3"
                                    />
                                    <Heading fontSize={18}>
                                        {question?.timeAnswer}
                                    </Heading>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                )
            })}
            <Box textAlign={'right'} my={4}>
                {pageNumbers.map((number) => (
                    <Button
                        key={number}
                        variant={number === currentPage ? 'solid' : 'outline'}
                        onClick={() => handlePageChange(number)}
                        mx={1}
                    >
                        {number}
                    </Button>
                ))}
            </Box>
        </>
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
