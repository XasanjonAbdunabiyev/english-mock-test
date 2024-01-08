import React, { useEffect, useState } from "react"

import { Box, Button } from "@chakra-ui/react"

import { SliderMark } from "@/components/shared/RangeSlider/SliderMark"

import { useSearchParams } from "react-router-dom"

export const PurchaseMockTable = ({ tableData }) => {
    let [searchParam] = useSearchParams()
    let moduleId = searchParam.get("module-id")

    let filteredByModule = tableData?.filter((item) => {
        return item?.id === moduleId
    })

    return (
        <Box className="purchase_mock_table">
            <SliderMark initialProgress={10} />

            <Box className="p-6 shadow border mt-6">
                <Box className="flex items-center justify-between">
                    <Box className="font-bold uppercase text-center">
                        Question Title
                    </Box>
                    <Box className="font-bold uppercase text-center">
                        Time To Think
                    </Box>
                    <Box className="font-bold uppercase text-center">
                        Time Answer
                    </Box>
                </Box>

                <Box>
                    {filteredByModule?.map((part_questions) => {
                        return (
                            <div>
                                {part_questions?.part_one[0]?.question_title}
                            </div>
                        )
                    })}
                </Box>
            </Box>
            <Button
                onClick={() => {
                    console.log("click")
                }}
                className="bg-green-800 text-white font-bold w-full my-3 uppercase hover:bg-green-600"
            >
                Start
            </Button>
        </Box>
    )
}
