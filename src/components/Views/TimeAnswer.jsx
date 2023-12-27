import { Heading } from "@chakra-ui/react"

import React, { memo, useContext, useEffect, useState } from "react"

import { useSpeakingTable } from "@/hooks/useSpeakingTable"

import { SpeakingPaginationContext } from "@/context/SpeakingPaginationContext"

export const TimeAnswer = memo(function ({ initialState }) {
    const [value, setValue] = useState(initialState)

    const pagination_context = useContext(SpeakingPaginationContext)

    const { timeAnswersStart } = useSpeakingTable()

    useEffect(() => {
        let intervalId

        if (timeAnswersStart) {
            intervalId = setInterval(() => {
                setValue((prevState) => {
                    if (prevState > 0) {
                        return prevState - 1
                    } else {
                        clearTimeout(intervalId)
                        pagination_context?.handlePageChange(
                            pagination_context?.currentPage + 1
                        )
                        return 0
                    }
                })
            }, 1000)
        }

        return () => {
            clearTimeout(intervalId)
        }
    }, [timeAnswersStart])

    return (
        <Heading fontSize={16} fontWeight="bold">
            {value} second
        </Heading>
    )
})
