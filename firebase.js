// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAlwPBP8jCGuEXP4BjxoDIQuJqqb52sRQM',
  authDomain: 'next-facebook-ce2f4.firebaseapp.com',
  projectId: 'next-facebook-ce2f4',
  storageBucket: 'next-facebook-ce2f4.appspot.com',
  messagingSenderId: '503240262873',
  appId: '1:503240262873:web:22f25eef7bcc186f206ac8',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
