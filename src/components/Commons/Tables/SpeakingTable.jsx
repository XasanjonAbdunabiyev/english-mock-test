import React, { lazy, memo, useState } from "react"

import { TableContainer, Heading, Button } from "@chakra-ui/react"
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
        <>
            <TableContainer className="my-5">
                <div className="speaking__table">
                    {questions?.map((question) => {
                        return (
                            <div className="questions_table" key={question?.id}>
                                <div className="my-5">
                                    <AudioPlay src={question?.questionAudio} />
                                </div>
                                <div>
                                    <div>
                                        <div>Time to think</div>
                                        <div>Question</div>
                                        <div>Time to answer</div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <div className="flex items-center justify-center flex-col">
                                                <CiWarning
                                                    fontSize={40}
                                                    className="mb-3"
                                                />
                                                {question?.timeThink}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-center flex-col">
                                                <Heading fontSize={20}>
                                                    {question?.question_title}
                                                </Heading>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-center flex-col">
                                                <TbClockHour3
                                                    fontSize={40}
                                                    className="mb-3"
                                                />
                                                <TimeAnswer
                                                    time={question?.timeAnswer}
                                                />
                                            </div>
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
            </TableContainer>
        </>
    )
})
