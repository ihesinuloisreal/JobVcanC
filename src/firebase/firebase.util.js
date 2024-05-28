// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXOCsXgnxBa7ZF_U5fQQijfNoEXq3bMDA",
  authDomain: "jbudt-db.firebaseapp.com",
  projectId: "jbudt-db",
  storageBucket: "jbudt-db.appspot.com",
  messagingSenderId: "121399050488",
  appId: "1:121399050488:web:598e7616b15562cdf8bb0d",
  measurementId: "G-YHZV3WQ0C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);