import React, { memo, useEffect, useRef } from "react"

export const AudioPlay = memo(function ({ src }) {
    const audioRef = useRef(null)

    useEffect(() => {
        const playMusic = async () => {
            const audio = audioRef?.current
            try {
                if (audio) {
                    await audio.play()
                }
            } catch (error) {
                console.error("Audio play failted")
            }
        }
        playMusic()
    }, [src])

    return (
        <audio
            src={src}
            controls
            autoPlay={true}
            ref={audioRef}
            className="w-full my-3"
        />
    )
})
