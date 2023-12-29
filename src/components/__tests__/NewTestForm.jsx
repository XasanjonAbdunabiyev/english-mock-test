import React, { useState } from "react"

const MyForm = () => {
    const initialData = {
        question_title: "",
        timeAnswer: "",
        timeThink: "",
        questionAudio: "",
    }

    const [formData, setFormData] = useState(initialData)
    const [partQuestions, setPartQuestions] = useState({
        part_one: [],
    })

    const handleAddQuestion = () => {
        setPartQuestions((prevQuestions) => ({
            part_one: [...prevQuestions.part_one, { ...formData }],
        }))
        setFormData(initialData) // Formni tozalash
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    return (
        <div>
            <form>{/* Form maydonlari */}</form>
            <button type="button" onClick={handleAddQuestion}>
                Add
            </button>

            {/* Qo'shilgan savollarni ko'rsatish */}
            {partQuestions.part_one.map((question, index) => (
                <div key={index}>
                    <p>{`Question ${index + 1}`}</p>
                    {/* Savol ma'lumotlari ko'rsatish */}
                </div>
            ))}
        </div>
    )
}

export default MyForm
