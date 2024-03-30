import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAXZdTVweHZCKmaBSqnErNxlBQIOlJObg",
  authDomain: "authentication-140ed.firebaseapp.com",
  projectId: "authentication-140ed",
  storageBucket: "authentication-140ed.appspot.com",
  messagingSenderId: "700088881384",
  appId: "1:700088881384:web:830b2528fc3cd2dfddf95d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;