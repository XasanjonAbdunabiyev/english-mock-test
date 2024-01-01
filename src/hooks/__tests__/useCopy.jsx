import { useRef, useCallback } from "react"

export const useCopy = () => {
    const copyInputRef = useRef(null)

    const copyText = useCallback(() => {
        if (copyInputRef.current) {
            copyInputRef.current.select()
            document.execCommand("copy")
        }
    }, [])

    return {
        copyInputRef,
        copyText,
    }
}

export default useCopy;
