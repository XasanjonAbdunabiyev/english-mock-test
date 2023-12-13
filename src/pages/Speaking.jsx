import React, { lazy, useMemo } from 'react'
import { useGetDocs } from '../hooks/useGetDocs'
const Layout = lazy(() =>
    import('../layouts/Layout').then((module) => {
        return { default: module.Layout }
    })
)

const SpeakingTable = lazy(() =>
    import('../components/SpeakingTable').then((module) => {
        return { default: module.SpeakingTable }
    })
)

export const Speaking = () => {
    const { loading, questions } = useGetDocs()
    if (loading && questions.length == 0) return <p>Loading...</p>

    const tasks = useMemo(() => {
        return questions
    }, []);

    console.log(tasks);
    return (
        <div className="speaking-page">
            <Layout>
                <SpeakingTable questions={tasks} />
            </Layout>
        </div>
    )
}
