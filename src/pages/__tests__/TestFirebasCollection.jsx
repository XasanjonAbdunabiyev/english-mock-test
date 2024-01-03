import { useState } from "react"

import { db } from "@/firebase/config"
import { doc, setDoc, arrayUnion, collection } from "firebase/firestore"
export default function TestFirebasCollection() {
    const [newItem, setNewItem] = useState({
        title: "",
        description: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewItem((prevItem) => ({
            ...prevItem,
            [name]: value,
        }))
    }

    const handleAddItem = async () => {
        try {
            const newItem = {
                // Yangi savol ma'lumotlari
                question_title: "New Question",
                timeAnswer: 10,
                timeThink: 5,
                questionAudio: "audio-url.mp3",
            }

            const docRef = doc(db, "yourCollection")

            // Birinchi marta push qilish
            await setDoc(docRef, { questions: [newItem] })

            console.log("First item added successfully!")
        } catch (error) {
            console.error("Error adding first item:", error)
        }
    }

    const handleAddAnotherItem = async () => {
        try {
            const newItem = {
                // Yangi savol ma'lumotlari
                question_title: "Another New Question",
                timeAnswer: 15,
                timeThink: 8,
                questionAudio: "another-audio-url.mp3",
            }

            const docRef = doc(db, "yourCollection")

            // Keyingi marta push qilish (Yangi obyektni o'zgartiramiz)
            await setDoc(
                docRef,
                { questions: arrayUnion(newItem) },
                { merge: true }
            )

            console.log("Another item added successfully!")
        } catch (error) {
            console.error("Error adding another item:", error)
        }
    }

    return (
        <div>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={newItem.title}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    name="description"
                    value={newItem.description}
                    onChange={handleInputChange}
                />
            </label>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    )
}
