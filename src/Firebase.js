import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDV0-4J9xSXc201z2_4jATHSa4dbvahxOc",
    authDomain: "netflix-ec6c4.firebaseapp.com",
    projectId: "netflix-ec6c4",
    storageBucket: "netflix-ec6c4.appspot.com",
    messagingSenderId: "549652017319",
    appId: "1:549652017319:web:6326495762787ddcd96b82",
    measurementId: "G-T5M2K491NE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
