import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsv3Vmy3worR6ZPvZj8n70U4Cyx2GRwrE",
  authDomain: "disneyplus-clone-a3a8b.firebaseapp.com",
  projectId: "disneyplus-clone-a3a8b",
  storageBucket: "disneyplus-clone-a3a8b.appspot.com",
  messagingSenderId: "616266613050",
  appId: "1:616266613050:web:1aefb687f48ace978d1003",
  measurementId: "G-FWB97B6HWJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.default.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
