// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// import "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Udr_pyEk-z4JwaDDUZz8yelYvd8e86w",
  authDomain: "care-humanity-1e56e.firebaseapp.com",
  databaseURL: "https://care-humanity-1e56e-default-rtdb.firebaseio.com",
  projectId: "care-humanity-1e56e",
  storageBucket: "care-humanity-1e56e.appspot.com",
  messagingSenderId: "732348985909",
  appId: "1:732348985909:web:4030a6ec0ee7b4b9c4b77c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore()
export default firebase
