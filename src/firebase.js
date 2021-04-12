import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3H3IfI_YXA61XQlfoKY2lCLvfrI92FaQ",
    authDomain: "clone-3a991.firebaseapp.com",
    projectId: "clone-3a991",
    storageBucket: "clone-3a991.appspot.com",
    messagingSenderId: "142557306295",
    appId: "1:142557306295:web:ed2fc265ea02d4e0221c32"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };