// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
