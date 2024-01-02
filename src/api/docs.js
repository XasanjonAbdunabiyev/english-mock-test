import { db } from "@/firebase/config"

import { getDocs, collection, getDoc, doc, deleteDoc } from "firebase/firestore"

const collectionRef = collection(db, "mock_tests")
const loginCollectionRef = collection(db, "login")
const usersCollectionRef = collection(db, "users")
const paidMockQuestionsCollectionRef = collection(db, "purchase_mock_tests")

export const getQuestions = async () => {
    try {
        const db = await getDocs(collectionRef)
        const tasks = db?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))
        return tasks
    } catch (error) {
        console.error(error)
    }
}

export const getLoginData = async () => {
    const db = await getDocs(loginCollectionRef)
    const loginData = db?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))

    return loginData
}

/**
 *
 * @param id type string
 * @returns promise single question
 */

export const getQuestionById = async (id) => {
    const singleQuestionCollectionRef = doc(db, "mock_tests", id)
    const res = await getDoc(singleQuestionCollectionRef)

    if (res?.exists()) {
        return res.data()
    }
}

export async function getAllUsers() {
    const res = await getDocs(usersCollectionRef)
    const users = res.docs?.map((doc) => ({ ...doc?.data(), id: doc.id }))
    return users
}

export async function getAllPurchaseMockQuestions() {
    const res = await getDocs(paidMockQuestionsCollectionRef)
    const questions = res.docs?.map((doc) => ({ ...doc?.data(), id: doc.id }))
    return questions
}

export async function deleteUserFromUsersCollection(id) {
    try {
        return await deleteDoc(db, "users", id).then((res) => res)
    } catch (error) {
        console.error("error deleting user from users collection")
    }
}
