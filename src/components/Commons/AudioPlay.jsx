import React, { memo, useRef } from "react"

import { useSpeakingTable } from "@/hooks/useSpeakingTable"

export const AudioPlay = memo(function ({ src }) {
    const audioRef = useRef(null)
    const { timeThinkStart } = useSpeakingTable()

    if (timeThinkStart === true) {
        audioRef?.current?.play()
    }

    return (
        <audio
            src={src}
            controls
            ref={audioRef}
            className="w-full my-3 opacity-0"
        />
    )
})
