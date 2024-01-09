import { useState } from "react"
import ReactMic from "react-mic"

const VoiceRecorder = () => {
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

    return (
        <div>
            <ReactMic
                record={isRecording}
                className="sound-wave"
                onStop={onStop}
                onData={onData}
                strokeColor="#000000"
                backgroundColor="#FF4081"
            />
            <button onClick={startRecording} type="button">
                Start Recording
            </button>
            <button onClick={stopRecording} type="button">
                Stop Recording
            </button>
            {recordedBlob && (
                <audio controls>
                    <source src={recordedBlob.blobURL} type="audio/wav" />
                </audio>
            )}
        </div>
    )
}

export default VoiceRecorder
