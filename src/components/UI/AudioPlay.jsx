import React, { useState } from "react"

const AudioPlay = () => {
    const [audio, setAudio] = useState([])

    const addFile = (event) => {
        if (event?.target?.files[0]) {
            console.log(event?.target?.files[0])
        }
    }
    return (
        <div>
            <input type="file" onChange={(event) => addFile(event)} />
        </div>
    )
}

export default AudioPlay
