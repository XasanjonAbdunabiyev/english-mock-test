import React from "react"

import { Box, Button } from "@chakra-ui/react"

import { SliderMark } from "@/components/shared/RangeSlider/SliderMark"
export const PurchaseMockTable = ({ tableData }) => {
    return (
        <Box className="purchase_mock_table">
            <SliderMark />
        </Box>
    )
}
