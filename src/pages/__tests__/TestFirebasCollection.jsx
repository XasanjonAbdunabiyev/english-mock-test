import { addDoc, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase/config" // Firebase konfiguratsiyasi

const App = () => {
    const handleButtonClick = async () => {
        let docRef

        try {
            const newItem = {
                // Yangi savol ma'lumotlari
                question_title: "lorem ipsum",
                timeAnswer: 10,
            }

            docRef = doc(db, "tests", "9wX8FQYUKYRQQrx4CK9d")

            // Birinchi marta qo'shilganda
            await addDoc(docRef, {
                part_one: [newItem],
            })

            console.log("First item added successfully!")
        } catch (error) {
            console.error("Error adding first item:", error)
        }

        try {
            const anotherNewItem = {
                // Yangi savol ma'lumotlari
                question_title: "Another lorem ipsum",
                timeAnswer: 15,
            }

            // Keyingi marta push qilganda
            await updateDoc(docRef, {
                part_one: arrayUnion(anotherNewItem),
            })

            console.log("Another item added successfully!")
        } catch (error) {
            console.error("Error adding another item:", error)
        }
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Add Questions</button>
        </div>
    )
}

export default App
