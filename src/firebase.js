import * as firebase from "firebase";

const config={
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SEND_ID,
    appId: process.env.REACT_APP_APP_ID
}

// const config = {
//     apiKey: "AIzaSyAskaPB16FdgO-mjtKQ1LTCRDg1P4UTnsQ",
//     authDomain: "fir-39176.firebaseapp.com",
//     projectId: "fir-39176",
//     storageBucket: "fir-39176.appspot.com",
//     messagingSenderId: "213745477837",
//     appId: "1:213745477837:web:90538c30faaeb0baf46184",
//     measurementId: "G-CE22N7FZW7"
//   };

firebase.initializeApp(config);
const storage = firebase.storage();
export default firebase;