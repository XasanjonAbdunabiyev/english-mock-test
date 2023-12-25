import React, { lazy, memo, useState } from "react"

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
    Button,
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
        <>
            <TableContainer className="my-5">
                <div className="speaking__table">
                    {questions?.map((question) => {
                        return (
                            <div className="questions_table" key={question?.id}>
                                <div className="my-5">
                                    <AudioPlay src={question?.questionAudio} />
                                </div>
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th
                                                textAlign="center"
                                                fontSize={25}
                                                fontWeight="bold"
                                            >
                                                Time to think
                                            </Th>
                                            <Th
                                                fontSize={25}
                                                textAlign="center"
                                                fontWeight="bold"
                                            >
                                                Question
                                            </Th>
                                            <Th
                                                fontSize={25}
                                                textAlign="center"
                                                fontWeight="bold"
                                            >
                                                Time to answer
                                            </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                <div className="flex items-center justify-center flex-col">
                                                    <CiWarning
                                                        fontSize={40}
                                                        className="mb-3"
                                                    />
                                                    {question?.timeThink}
                                                </div>
                                            </Td>

                                            <Td>
                                                <div className="flex items-center justify-center flex-col">
                                                    <Heading fontSize={20}>
                                                        {
                                                            question?.question_title
                                                        }
                                                    </Heading>
                                                </div>
                                            </Td>

                                            <Td>
                                                <div className="flex items-center justify-center flex-col">
                                                    <TbClockHour3
                                                        fontSize={40}
                                                        className="mb-3"
                                                    />
                                                    <TimeAnswer
                                                        time={
                                                            question?.timeAnswer
                                                        }
                                                    />
                                                </div>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
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
