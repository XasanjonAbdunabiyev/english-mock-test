import React, { lazy, useContext } from "react"

import { Heading, Button, Wrap, WrapItem, Box } from "@chakra-ui/react"

import { TimeAnswer } from "@/components/Views/TimeAnswer"
import { CiWarning } from "react-icons/ci"
import { TbClockHour3 } from "react-icons/tb"

import { TimeThink } from "@/components/Views/TimeThink"
import { useSpeakingTable } from "@/hooks/useSpeakingTable"

import { SpeakingPaginationContext } from "@/context/SpeakingPaginationContext"
const AudioPlay = lazy(() =>
    import("../AudioPlay").then((module) => {
        return { default: module.AudioPlay }
    })
)

export const SpeakingTable = function () {
    
    const { startTimeThink } = useSpeakingTable()
    const pagination_context = useContext(SpeakingPaginationContext)

    return (
        <Box className="speaking__table">
            {pagination_context?.currentItems?.map((question) => {
                return (
                    <Box className="questions_table p-5" key={question?.id}>
                        <Box className="my-5">
                            <AudioPlay src={question?.questionAudio} />
                        </Box>
                        <Box className="flex items-center justify-between gap-20 max-[800px]:flex-col w-full">
                            <Box>
                                <Heading
                                    className="flex items-center justify-center flex-col"
                                    fontSize={17}
                                >
                                    <span className="text-[17] font-bold  my-3">
                                        Time To Think
                                    </span>

                                    <CiWarning fontSize={40} className="mb-3" />

                                    <TimeThink
                                        initialState={question?.timeThink}
                                    />
                                </Heading>
                            </Box>

                            <Wrap className="w-[45%] flex items-center justify-center flex-col max-[800px]:w-full">
                                <WrapItem>
                                    <Heading fontSize={16} textAlign="center" lineHeight={2}>
                                        {question?.question_title}
                                    </Heading>
                                </WrapItem>
                            </Wrap>

                            <Box>
                                <Box className="flex items-center justify-center flex-col">
                                    <Heading
                                        className="flex items-center justify-center flex-col"
                                        fontSize={17}
                                    >
                                        <span className="text-[17] my-3 font-bold">
                                            Time To Answer
                                        </span>

                                        <TbClockHour3
                                            fontSize={40}
                                            className="mb-3"
                                        />
                                    </Heading>
                                    <TimeAnswer
                                        initialState={question?.timeAnswer}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
            <Button
                fontSize={20}
                onClick={() => {
                    startTimeThink()
                }}
                letterSpacing={1}
                colorScheme="green"
                className="w-full my-2 uppercase font-bold"
            >
                Start
            </Button>
            <Box className="flex items-center gap-x-5">
                {Array.from(
                    { length: pagination_context?.totalPages },
                    (_, index) => (
                        <Button
                            key={index}
                            onClick={() => pagination_context?.handlePageChange(index + 1)}
                            disabled={
                                pagination_context?.currentPage === index + 1
                            }
                        >
                            {index + 1}
                        </Button>
                    )
                )}

                <Button
                    colorScheme="green"
                    onClick={() =>
                        pagination_context?.handlePageChange(
                            pagination_context?.currentPage + 1
                        )
                    }
                    disabled={
                        pagination_context?.currentPage ===
                        pagination_context?.totalPages
                    }
                >
                    Next Questions
                </Button>
            </Box>
        </Box>
    )
}
