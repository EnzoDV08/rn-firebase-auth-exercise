// TODO: Create Firebase Auth Functions
import { auth, db } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user.email);

         await AsyncStorage.setItem('userUID', user.uid);
         console.log("User UID saved to AsyncStorage:", user.uid);

        } catch (error: any) {
                console.error("Error logging in:", error.message);
  }
  };

//TODO: Registration Function
export const registerUser = async (email: string, password: string) => {
try {
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredentials.user;

  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    createdAt: new Date().toISOString(),
    uid: user.uid,
  });

  console.log("User registered:", user.email);
} catch (error: any) {
    console.error("Error registering user:", error.message);
}
};

export const logoutUser = () => {
    signOut(auth)
    .then(() => {
        console.log("User logged out.....");
    })
    }

export const getUserInfo = () => {
    const user = auth.currentUser;
    if (user) {
        return user;
    } else {
        return null;
    }
}