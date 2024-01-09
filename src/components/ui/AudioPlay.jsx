import React, { memo, useRef } from "react"

export const AudioPlay = memo(function ({ src, timeThinkStart }) {
    const audioRef = useRef(null)

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
