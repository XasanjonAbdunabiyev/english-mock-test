import { Heading } from "@chakra-ui/react"

import React, { memo, useEffect, useState } from "react"

import { useSpeakingTable } from "@/hooks/useSpeakingTable"

export const TimeAnswer = memo(function ({ initialState }) {
    const [value, setValue] = useState(initialState)

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
