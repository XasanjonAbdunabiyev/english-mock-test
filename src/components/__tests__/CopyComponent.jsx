import React from "react"
import useCopyHook from "@/hooks/__tests__/useCopy" // Assuming your hook file is named useCopyHook.js

const CopyComponent = () => {
    const { copyInputRef, copyText } = useCopyHook()

    const handleCopyClick = () => {
        copyText()
        // You can also provide feedback to the user that the text has been copied
    }

    return (
        <div>
            <input
                ref={copyInputRef}
                type="text"
                value="Text to copy"
                readOnly
            />
            <button onClick={handleCopyClick}>Copy Text</button>
        </div>
    )
}

export default CopyComponent
