import React, { lazy, useState } from "react"

import { Button, Box } from "@chakra-ui/react"

import { useSpeakingTable } from "@/hooks/useSpeakingTable"

import { Empty } from "@/components/ui/Empty"

const AudioPlay = lazy(() =>
    import("../AudioPlay").then((module) => {
        return { default: module.AudioPlay }
    })
)

import { useSearchParams } from "react-router-dom"
import VoiceRecorder from "@/components/shared/Record/VoiceRecord"

export const SpeakingTable = function ({ speakingTabe }) {
    const { startTimeThink } = useSpeakingTable()
    const [searchParams] = useSearchParams()

    const moduleId = searchParams.get("module-id")

    return (
        <Box className="speaking__table">
            <AudioPlay />
            {/* <VoiceRecorder /> */}
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
