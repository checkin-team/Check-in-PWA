import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firebase-firestore"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgbGTaBq24PjvnGKswpumxRxEZ63B2S5A",
  authDomain: "checkin-app-18.firebaseapp.com",
  databaseURL: "https://checkin-app-18.firebaseio.com",
  projectId: "checkin-app-18",
  storageBucket: "checkin-app-18.appspot.com",
  messagingSenderId: "759838524399",
  appId: "1:759838524399:web:b2812dfff83aa40f49ec1a"
}

const app = firebase.initializeApp(firebaseConfig)


const storage = firebase.storage()

export { storage, app as default }
