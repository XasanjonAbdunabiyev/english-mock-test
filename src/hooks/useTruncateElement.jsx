import { useState, useLayoutEffect } from "react"

const useTruncateElement = ({ ref }) => {
    const [isTruncated, setIsTruncated] = useState(false)
    const [isShowingMore, setIsShowingMore] = useState(false);
    
    useLayoutEffect(() => {
        const { offsetHeight, scrollHeight } = ref.current || {}

        if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
            setIsTruncated(true)
        } else {
            setIsTruncated(false)
        }
    }, [ref])

    const toggleIsShowingMore = () => setIsShowingMore(prev => !prev);

    return {
        isTruncated,
        isShowingMore,
        setIsReadingMore,
    }
}

export default useTruncateElement
