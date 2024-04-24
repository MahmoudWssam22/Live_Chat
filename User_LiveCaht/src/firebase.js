// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFRzlGtG_g0uSYp8B4x2I5l2DbKS_y79o",
  authDomain: "test-c42ee.firebaseapp.com",
  databaseURL: "https://test-c42ee-default-rtdb.firebaseio.com",
  projectId: "test-c42ee",
  storageBucket: "test-c42ee.appspot.com",
  messagingSenderId: "283949118176",
  appId: "1:283949118176:web:40f470e59cf8537adb5685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
