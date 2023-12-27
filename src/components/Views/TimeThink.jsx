import React, { useState, useEffect } from "react"

import { Heading } from "@chakra-ui/react"
import { useSpeakingTable } from "@/hooks/useSpeakingTable"

export const TimeThink = ({ initialState }) => {
    const [value, setValue] = useState(initialState)

    const { timeThinkStart, endTimeThink, startTimeAnswers } =
        useSpeakingTable()

    useEffect(() => {
        let intervalId

        if (timeThinkStart) {
            intervalId = setInterval(() => {
                setValue((prevValue) => {
                    if (prevValue > 0) {
                        return prevValue - 1
                    } else {
                        clearInterval(intervalId)
                        endTimeThink();
                        startTimeAnswers();
                        return 0
                    }
                })
            }, 1000)
        }

        return () => {
            clearInterval(intervalId)
        }
    }, [timeThinkStart])

    return (
        <Heading fontSize={16} fontWeight="bold">
            {value} second
        </Heading>
    )
}
