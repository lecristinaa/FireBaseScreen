
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhK7kYIBTeerAi7Dqz1aZOCSXiK34csnM",
  authDomain: "fir-screen-da144.firebaseapp.com",
  projectId: "fir-screen-da144",
  storageBucket: "fir-screen-da144.appspot.com",
  messagingSenderId: "122486624065",
  appId: "1:122486624065:web:85fd7faf3093ff0dc8dbc0",
  measurementId: "G-D2SZZ7Z7KP"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, analytics }
