import { useState } from 'react'
import { Box, Button, ChakraProvider } from '@chakra-ui/react'

const itemsPerPage = 5

export function Pagination({ data }) {
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = currentPage - itemsPerPage
    const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem)

    // Generate page numbers
    const pageNumbers = Array.from(
        { length: Math.ceil(data.length / itemsPerPage) },
        (_, index) => index + 1
    );
    return (
        <>
            <div>
                <h3>Pagination</h3>
            </div>
        </>
    )
}
