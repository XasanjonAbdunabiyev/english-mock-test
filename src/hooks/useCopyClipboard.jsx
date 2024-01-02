import { useState, useCallback } from "react"

const useCopyClipboard = () => {
    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = useCallback((text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setIsCopied(true)
                setTimeout(() => {
                    setIsCopied(false)
                }, 1000)
            })
            .catch((error) => {
                console.error("Error copying to clipboard:", error)
            })
    }, [])

    return { isCopied, copyToClipboard }
}

export default useCopyClipboard
