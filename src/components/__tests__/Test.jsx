import { Pagination } from "./Pagination"

const questions = [
    {
        timeToThings: 5,
        question: "what is your favourite color",
        timeToAnswer: 30,
    },
    {
        timeToThings: 7,
        question: "what is your full name",
        timeToAnswer: 30,
    },
    {
        timeToThings: 7,
        question: "what is your hobby",
        timeToAnswer: 30,
    },

    {
        timeToThings: 5,
        question: "what is your favourite color",
        timeToAnswer: 30,
    },
    {
        timeToThings: 7,
        question: "what is your full name",
        timeToAnswer: 30,
    },
    {
        timeToThings: 7,
        question: "what is your hobby",
        timeToAnswer: 30,
    },
]

export const Test = () => {
    return (
        <div>
            <h1>My test component</h1>
            <Pagination data={questions} />
        </div>
    )
}
