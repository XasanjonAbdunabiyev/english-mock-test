import React, { lazy, useContext } from "react"

import { Box } from "@chakra-ui/react"

import { Empty } from "@/components/ui/Empty"

import { wait } from "@/api/wait"

const AudioPlay = lazy(() =>
    wait(1000).then(() =>
        import("@/components/Commons/AudioPlay").then((module) => {
            return { default: module.AudioPlay }
        })
    )
)

import { PaidMockTestQuestionContext } from "@/context/PaidMockTestQuestionContext"

export const PurchaseMockTable = () => {
    const purchase_mock_tests = useContext(PaidMockTestQuestionContext)
    return (
        <Box className="purchase_mock_table">
            {pagination_context?.currentItems.length <= 0 ? (
                <Empty />
            ) : (
                <>
                    {pagination_context?.currentItems?.map((question) => {
                        return (
                            <Box
                                className="questions_table p-5"
                                key={question?.id}
                            >
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

                                            <CiWarning
                                                fontSize={40}
                                                className="mb-3"
                                            />

                                            {question?.timeThink}
                                        </Heading>
                                    </Box>

                                    <Wrap className="w-[45%] flex items-center justify-center flex-col max-[800px]:w-full">
                                        <WrapItem>
                                            <Heading
                                                fontSize={16}
                                                textAlign="center"
                                                lineHeight={2}
                                            >
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
                                            {question?.timeAnswer}
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
                                    onClick={() =>
                                        pagination_context?.handlePageChange(
                                            index + 1
                                        )
                                    }
                                    disabled={
                                        pagination_context?.currentPage ===
                                        index + 1
                                    }
                                >
                                    {index + 1}
                                </Button>
                            )
                        )}

                        <Button
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
                </>
            )}
        </Box>
    )
}
