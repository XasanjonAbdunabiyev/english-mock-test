import { Heading } from "@chakra-ui/react"

import React, { memo, useEffect, useState } from "react"

export const TimeAnswer = memo(function ({ initialState }) {
    const [value, setValue] = useState(initialState)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue((prevState) => {
                if (prevState > 0) {
                    return prevState - 1
                }else {
                    clearTimeout(intervalId);
                    return 0;
                }
            })
        }, 1000);

        return () => {
            clearTimeout(intervalId);
        }

    }, [initialState])

    return (
        <Heading fontSize={16} fontWeight="bold">
            {value} second
        </Heading>
    )
})
