import React, { useState } from "react"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../../firebase/config"
import { useGetAudioUrl } from "../../store/AudioUrl"

const AudioUpload = () => {
    const [audioFile, setAudioFile] = useState(null)
    const { changeAudioUrl } = useGetAudioUrl()
    const [audioUrl, setAudioUrl] = useState("")

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setAudioFile(file)
    }

    const handleUpload = async () => {
        if (audioFile) {
            const storageRef = ref(storage, `audio/${audioFile.name}`)
            const uploadTask = uploadBytesResumable(storageRef, audioFile)

            uploadTask.on(
                "state_changed",
                (_snapshot) => {
                    // Yüklennişini izlashingiz mumkin
                },
                (error) => {
                    console.error("Error uploading audio file", error)
                },
                async () => {
                    // Yüklash tugallanishida URL ni olish
                    const downloadURL = await getDownloadURL(
                        uploadTask.snapshot.ref
                    )
                    setAudioUrl(downloadURL)

                    changeAudioUrl(audioUrl)
                }
            )
        } else {
            console.error("No audio file selected")
        }
    }

    return (
        <div>
            <input type="file" accept="audio/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Audio</button>
        </div>
    )
}

export default AudioUpload
