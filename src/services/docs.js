import { db } from "../firebase/config"

import { getDocs, collection, onSnapshot, doc, getDoc } from "firebase/firestore"

const collectionRef = collection(db, "mock_tests")
const loginCollectionRef = collection(db, "login")


export const getQuestions = async () => {
    const db = await getDocs(collectionRef)
    const tasks = db?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))

    return tasks
}

export const getLoginData = async () => {
    const db = await getDocs(loginCollectionRef)
    const loginData = db?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))

    return loginData
}

export const getQuestionsAtRealTime = async (id) => {
    const listen_real_time = onSnapshot(doc(db, "mock_tests"), (doc) => {
        return doc?.data()
    });

    return listen_real_time
}


export const getQuestionById = async (id) => {
    const singleQuestionCollectionRef = collection(db, "mock_tests", id)
    const res = await getDoc(singleQuestionCollectionRef)?.then((doc) => {
        return doc?.data()
    });

    return res
}
