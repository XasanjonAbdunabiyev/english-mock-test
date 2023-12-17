import React, { useEffect, useState } from "react"

import { Heading } from "@chakra-ui/react"

export const SecondComponent = ({ secund }) => {
    const [secound, setSecound] = useState(secund)

    useEffect(() => {
        const timer = setInterval(() => {
            setSecound((prevSeconds) => prevSeconds - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return <Heading fontSize={20}>{secound} second</Heading>
}
