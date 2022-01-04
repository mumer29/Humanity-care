

import firebase from 'firebase/compat/app';
// import "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: "AIzaSyAKkkC_ox8gBit49EYq8NUshloALWGOjJ4",
  authDomain: "save-wastage-food.firebaseapp.com",
  projectId: "save-wastage-food",
  storageBucket: "save-wastage-food.appspot.com",
  messagingSenderId: "396100750706",
  appId: "1:396100750706:web:de7d80683a8c4c8ba161eb"
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore()

const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    // console.log(err.message);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    toast.success("Log in successfully")
  } catch (err) {
    // console.log(err.message);
    // alert(err.message);
    toast.warn(err.message)
  }
};

const registerWithEmailAndPassword = async (name, userDasignation, phone, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      userDasignation,
      phone,
      authProvider: "local",
      email,

    });
    toast.success("Your account has been created successfully")
  } catch (err) {
    // console.log(err.message);

    toast.warn(err.message)
    // alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    toast.success("Password reset link is sent on your email address")
    // alert("Password reset link sent!");
  } catch (err) {
    // console.log(err.message);
    toast.warn(err.message)
    // alert(err.message);
  }
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};

