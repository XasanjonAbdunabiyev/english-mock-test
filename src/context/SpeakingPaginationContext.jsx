import { createContext, useState } from "react"

export const SpeakingPaginationContext = createContext(null)

import { useQuery } from "@tanstack/react-query"
import { getQuestions } from "@/api/docs"

export const SpeakingPaginationContextProvider = function ({ children }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(1)

    const { data, isLoading, isError } = useQuery({
        queryKey: ["speaking-panigation-table"],
        queryFn: getQuestions,
    })

    const startIndex = (currentPage - 1) * itemsPerPage

    const endIndex = startIndex + itemsPerPage

    const currentItems = data?.slice(startIndex, endIndex)

    // Calculate the total number of pages
    const totalPages = Math.ceil(data?.length / itemsPerPage)

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <SpeakingPaginationContext.Provider
            value={{
                handlePageChange,
                currentItems,
                currentPage,
                setCurrentPage,
                totalPages,
                loading: isLoading, 
                isError
            }}
        >
            {children}
        </SpeakingPaginationContext.Provider>
    )
}
