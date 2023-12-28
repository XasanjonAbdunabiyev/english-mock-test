import React, { useState, useEffect } from "react"
import axios from "axios"

const PaginationComponent = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(1)

    useEffect(() => {
        // Fetch data from the fake API
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                )
                setData(response.data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    // Calculate the index range of items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    // Get the items for the current page
    const currentItems = data.slice(startIndex, endIndex)

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage)

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <Box>
            {/* Render the current items */}
            {currentItems.map((item) => (
                <Box key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </Box>
            ))}

            {/* Render pagination controls */}
            <Box>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {/* Display page numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        className="bg-red-400 p-3 m-2"
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </Box>
        </Box>
    )
}

export default PaginationComponent
