import { initializeApp } from "firebase/app"

import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage"

import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCWyazU93Q0WIPrnB__kRtH0qCfyE4ogJQ",
    authDomain: "mock-test-41ff6.firebaseapp.com",
    projectId: "mock-test-41ff6",
    storageBucket: "mock-test-41ff6.appspot.com",
    messagingSenderId: "461868416118",
    appId: "1:461868416118:web:01fd67d304b4c257103357",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app);