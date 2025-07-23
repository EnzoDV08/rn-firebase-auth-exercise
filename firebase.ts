// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOnsBfk0MmRWfSQrDOwccN_DNwLaaHZgo",
  authDomain: "dv-300.firebaseapp.com",
  projectId: "dv-300",
  storageBucket: "dv-300.firebasestorage.app",
  messagingSenderId: "1048956537550",
  appId: "1:1048956537550:web:5d768fc88c6797db205e9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//app variable represents the Firebase app instance

// Initialize all our services for our firebase app
export const auth = getAuth(app); //variable that links to the authentication of my firebase app
export const db = getFirestore(app);

//HOMEWORK:
//1. Create the RegistrationScreen UI
//2. Create the registration authentication function in authServices
//3. Add the functionality to your registration screen
//4. add effient navigation between the login and registration screens (stacks & navigation functions)
//5. BONUS: try and add the user data to the database (if applicable) after registration
//6. BONUS: add useContext for auth state management
//7. BONUS: fix the localstorage issue with we get in the terminal