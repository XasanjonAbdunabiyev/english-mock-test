import React, { lazy, useState } from "react"

import { Button, Box } from "@chakra-ui/react"

import { useSpeakingTable } from "@/hooks/useSpeakingTable"

import { Empty } from "@/components/ui/Empty"

const AudioPlay = lazy(() =>
    import("../AudioPlay").then((module) => {
        return { default: module.AudioPlay }
    })
)

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react"

import { useSearchParams } from "react-router-dom"
import VoiceRecorder from "@/components/shared/Record/VoiceRecord"
import { SliderMark } from "@/components/shared/RangeSlider/SliderMark"
import { ReactMic } from "react-mic"

export const SpeakingTable = function ({ speakingTabe }) {
    const { startTimeThink } = useSpeakingTable()
    const [searchParams] = useSearchParams()

    const moduleId = searchParams.get("module-id")
    const [isRecording, setIsRecording] = useState(false)
    const [recordedBlob, setRecordedBlob] = useState(null)

    const startRecording = () => {
        setIsRecording(true)
    }

    const stopRecording = () => {
        setIsRecording(false)
    }

    const onData = (recordedBlob) => {
        console.log("chunk of real-time data is: ", recordedBlob)
    }

    const onStop = (recordedBlob) => {
        console.log("recordedBlob is: ", recordedBlob)
        setRecordedBlob(recordedBlob)
    }

    const downloadRecording = () => {
        const url = URL.createObjectURL(
            new Blob([recordedBlob.blob], { type: "audio/wav" })
        )
        const a = document.createElement("a")
        document.body.appendChild(a)
        a.style = "display: none"
        a.href = url
        a.download = "recordedAudio.wav"
        a.click()
        window.URL.revokeObjectURL(url)
    }

    return (
        <Box className="speaking__table">
            <ReactMic
                record={isRecording}
                className="sound-wave w-full h-32 rounded-lg"
                onStop={onStop}
                onData={onData}
                backgroundColor="blue"
                strokeColor="#003380"
            />
            <AudioPlay />
            <button
                onClick={startRecording}
                type="button"
                className="bg-gray-300 mx-2 p-3 font-bold"
            >
                Start Recording
            </button>
            <button
                onClick={stopRecording}
                type="button"
                className="bg-gray-300 mx-2 p-3 font-bold"
            >
                Stop Recording
            </button>
            <SliderMark initialProgress={20} />
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th fontSize={20}>Question Title</Th>
                            <Th fontSize={20}>Time Answer</Th>
                            <Th fontSize={20}>Time Think</Th>
                        </Tr>
                    </Thead>
                </Table>
            </TableContainer>
            {recordedBlob && (
                <div>
                    <button onClick={downloadRecording} type="button">
                        Download Recording
                    </button>
                    <audio controls>
                        <source src={recordedBlob.blobURL} type="audio/wav" />
                    </audio>
                </div>
            )}
            <Button
                fontSize={20}
                onClick={() => {
                    startTimeThink()
                }}
                letterSpacing={1}
                className="w-full bg-green-800 hover:bg-green-600 text-white my-2 uppercase font-bold"
            >
                Start
            </Button>
        </Box>
    )
}
