import React, { lazy, memo, useState } from "react"

import {
    TableContainer,
    Heading,
    Button,
    Wrap,
    WrapItem,
} from "@chakra-ui/react"
import { TimeAnswer } from "@/components/Views/TimeAnswer"
import { CiWarning } from "react-icons/ci"
import { TbClockHour3 } from "react-icons/tb"

const AudioPlay = lazy(() =>
    import("../AudioPlay").then((module) => {
        return { default: module.AudioPlay }
    })
)

export const SpeakingTable = memo(function ({ questions }) {
    return (
        <div className="speaking__table">
            {questions?.map((question) => {
                return (
                    <div className="questions_table p-5" key={question?.id}>
                        <div className="my-5">
                            <AudioPlay src={question?.questionAudio} />
                        </div>
                        <div className="flex items-center justify-between gap-20 max-[800px]:flex-col w-full">
                            <div>
                                <Heading
                                    className="flex items-center justify-center flex-col"
                                    fontSize={17}
                                >
                                    <span className="text-[17] font-bold  my-3">
                                        {" "}
                                        Time To Think
                                    </span>
                                    <CiWarning fontSize={40} className="mb-3" />
                                    {question?.timeThink}
                                </Heading>
                            </div>

                            <Wrap className="w-[45%] text-center max-[800px]:w-full">
                                <WrapItem>
                                    <Heading fontSize={16} lineHeight={2}>
                                        {question?.question_title}
                                    </Heading>
                                </WrapItem>
                            </Wrap>

                            <div>
                                <div className="flex items-center justify-center flex-col">
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
                                    <TimeAnswer time={question?.timeAnswer} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Button
                fontSize={20}
                letterSpacing={1}
                colorScheme="green"
                className="w-full my-2 uppercase font-bold"
            >
                Start
            </Button>
        </div>
    )
})
