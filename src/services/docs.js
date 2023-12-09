import { db } from "../firebase/config"

import { getDocs, collection } from "firebase/firestore";

const collectionRef = collection(db, "mock_tests");

export const getQuestions = async () => {
    const db = await getDocs(collectionRef);
    const tasks = db?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));

    return tasks
} 