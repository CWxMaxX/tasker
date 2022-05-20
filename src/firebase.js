// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8CS4O4qpu-OJtVUNUsGV7VAdNEYOpKw4",
  authDomain: "tasker-cwx.firebaseapp.com",
  projectId: "tasker-cwx",
  storageBucket: "tasker-cwx.appspot.com",
  messagingSenderId: "273539285890",
  appId: "1:273539285890:web:98f7068425de68ce1e459b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const appAuth = getAuth(firebaseApp);
