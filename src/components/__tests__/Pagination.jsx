import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'

const itemsPerPage = 1 // Number of items to display per page

export const Pagination = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1)

    // Calculate the range of items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // Generate page numbers
    const pageNumbers = Array.from(
        { length: Math.ceil(data.length / itemsPerPage) },
        (_, index) => index + 1
    )

    return (
        <Box>
            {/* Display current page items */}
            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item.question}</li>
                ))}
            </ul>

            {/* Display pagination */}
            <Box>
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
        </Box>
    )
}
