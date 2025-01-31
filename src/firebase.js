// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKqZZ5LHePenvMa-32gdkUw-N6chf8Xz0",
  authDomain: "fitnesscourseardele.firebaseapp.com",
  projectId: "fitnesscourseardele",
  storageBucket: "fitnesscourseardele.appspot.com",
  messagingSenderId: "1074977123819",
  appId: "1:1074977123819:web:caad84daa99615eb8b7dae",
  measurementId: "G-7Q2W22GRFX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
