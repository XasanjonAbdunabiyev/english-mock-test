import React from "react"

import { Box, Button } from "@chakra-ui/react"

import { SliderMark } from "@/components/shared/RangeSlider/SliderMark"
export const PurchaseMockTable = ({ tableData }) => {
    return (
        <Box className="purchase_mock_table">
            <SliderMark />

            <Box className="p-6 shadow border mt-6">
                <Box className="flex items-center justify-between">
                    <Box className="font-bold uppercase text-center">Question Title</Box>
                    <Box className="font-bold uppercase text-center">Time To Think</Box>
                    <Box className="font-bold uppercase text-center">Time Answer</Box>
                </Box>
            </Box>
        </Box>
    )
}
