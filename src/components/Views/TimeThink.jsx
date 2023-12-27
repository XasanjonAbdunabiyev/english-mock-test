import { Heading } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"

export const TimeThink = ({ initialState }) => {
    const [value, setValue] = useState(initialState)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue((prevValue) => {
                if (prevValue > 0) {
                    return prevValue - 1
                } else {
                    clearInterval(intervalId)
                    return 0
                }
            })
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [initialState])

    return (
        <Heading fontSize={16} fontWeight="bold">
            {value} second
        </Heading>
    )
}
