import AudioRecorder from "@/components/shared/Record/AudioRecorder"
import VideoRecorder from "@/components/shared/Record/VideoRecord"
import { useState, useRef } from "react"
import React from "react"

const VidoeRecord = () => {
    let [recordOption, setRecordOption] = useState("video")
    const toggleRecordOption = (type) => {
        return () => {
            setRecordOption(type)
        }
    }
    return (
        <div>
            <h1>React Media Recorder</h1>
            <div className="button-flex">
                <button onClick={toggleRecordOption("video")}>
                    Record Video
                </button>
                <button onClick={toggleRecordOption("audio")}>
                    Record Audio
                </button>
            </div>
            <div>
                {recordOption === "video" ? (
                    <VideoRecorder />
                ) : (
                    <AudioRecorder />
                )}
            </div>
        </div>
    )
}

export default VidoeRecord
