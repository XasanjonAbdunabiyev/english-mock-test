import React from "react"

import { Box, Text } from "@chakra-ui/react"

export const Empty = () => {
    return (
        <Box className="empty" textAlign="center">
            <Text fontSize="2xl">No data available</Text>
        </Box>
    )
}
