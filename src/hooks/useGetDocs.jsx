import { useState, useEffect } from "react"
import { getQuestions } from "@/services/docs"

export const useGetDocs = () => {
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const abortController = new AbortController()
        try {
            setLoading(true)
            getQuestions().then((data) => {
                setQuestions(data)
            })
        } catch (error) {
            console.error("Fetch Failed", "internet connection")
        } finally {
            setLoading(false)
        }

        return () => {
            /**
             * Clean Up logic, if needed
             */
            abortController.abort()
        }
    }, [])

    return { loading, questions }
}
