// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAVBAazgPqJ3Irx1MFndsVJGdD3AMzjYOA",
  authDomain: "house-marketplace-app-010.firebaseapp.com",
  projectId: "house-marketplace-app-010",
  storageBucket: "house-marketplace-app-010.appspot.com",
  messagingSenderId: "743234991914",
  appId: "1:743234991914:web:dfcbf89fb513bb60ecd053",
}

export const db = getFirestore()
