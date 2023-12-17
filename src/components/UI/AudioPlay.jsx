import React, { memo, useEffect, useRef } from "react"

export const AudioPlay = memo(function ({ src }) {
    const audioRef = useRef(null)

    useEffect(() => {
        const playAudio = async () => {
            try {
                await audioRef.current.play()
            } catch (error) {
                console.error("Audio playback error:", error.message)
            }
        }

        // Sahifa yuklanganda avtomatik ravishda audio eshitilsin
        playAudio()
    }, []) // Bo'sh massiv, useEffect bir marta faqat o'zi yuklanadi

    return (
        <audio ref={audioRef} autoPlay={true} className="w-full my-3">
            <source src={src} type="audio/mpeg" />
        </audio>
    )
})
