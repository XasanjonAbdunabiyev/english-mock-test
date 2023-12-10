import React, { lazy } from 'react'
import { getQuestions } from '../services/docs'

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
    const [questions, setQuestions] = React.useState([])
    React.useEffect(() => {
        getQuestions().then((data) => {
            setQuestions(data)
        })
    }, []);


    return (
        <div className="speaking-page">
            <Layout>
                <SpeakingTable />
            </Layout>
        </div>
    )
}
