import React, { createContext } from "react"

export const PaidMockTestQuestionContext = createContext(null)

import { useQuery } from "@tanstack/react-query"

import { getAllPurchaseMockQuestions } from "@/api/docs";

const PaidMockTestQuestionContextProvider = ({ children }) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["purchase_mock_tests"],
        queryFn: getAllPurchaseMockQuestions,
    })

    return (
        <PaidMockTestQuestionContext.Provider
            value={{
                loading: isLoading,
                isError,
                error,
            }}
        >
            {children}
        </PaidMockTestQuestionContext.Provider>
    )
}

export default PaidMockTestQuestionContextProvider
