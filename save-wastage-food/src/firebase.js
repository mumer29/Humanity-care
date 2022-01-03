

import firebase from 'firebase/compat/app';
// import "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

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
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name,phone, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      phone,
      authProvider: "local",
      email,
      
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
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


// // Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// // import "firebase/auth";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/database';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyA6Udr_pyEk-z4JwaDDUZz8yelYvd8e86w",
// //   authDomain: "care-humanity-1e56e.firebaseapp.com",
// //   databaseURL: "https://care-humanity-1e56e-default-rtdb.firebaseio.com",
// //   projectId: "care-humanity-1e56e",
// //   storageBucket: "care-humanity-1e56e.appspot.com",
// //   messagingSenderId: "732348985909",
// //   appId: "1:732348985909:web:4030a6ec0ee7b4b9c4b77c"
// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyB_-0M2DW46KzyYB00Cf91AjwydeI3jfSY",
//   authDomain: "fir-auth-article-84a9e.firebaseapp.com",
//   projectId: "fir-auth-article-84a9e",
//   storageBucket: "fir-auth-article-84a9e.appspot.com",
//   messagingSenderId: "403858505234",
//   appId: "1:403858505234:web:5be6da76aea7e9bf5a22cb"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export const firestore = firebase.firestore()
// // export const auth =  firebase.auth()
// export default firebase


// const app = firebase.initializeApp(firebaseConfig);
// const auth = app.auth();
// const db = app.firestore();

// const googleProvider = new firebase.auth.GoogleAuthProvider();

// const signInWithGoogle = async () => {
//     try {
//         const res = await auth.signInWithPopup(googleProvider);
//         const user = res.user;
//         const query = await db
//             .collection("users")
//             .where("uid", "==", user.uid)
//             .get();
//         if (query.docs.length === 0) {
//             await db.collection("users").add({
//                 uid: user.uid,
//                 name: user.displayName,
//                 authProvider: "google",
//                 email: user.email,
//             });
//         }
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };

// const signInWithEmailAndPassword = async (email, password) => {
//     try {
//         await auth.signInWithEmailAndPassword(email, password);
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };

// const registerWithEmailAndPassword = async (name, email, password) => {
//     try {
//       const res = await auth.createUserWithEmailAndPassword(email, password);
//       const user = res.user;
//       await db.collection("users").add({
//         uid: user.uid,
//         name,
//         authProvider: "local",
//         email,
//         // password
//       });
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

//   const logout = () => {
//     auth.signOut();
//   };

//   const sendPasswordResetEmail = async (email) => {
//     try {
//       await auth.sendPasswordResetEmail(email);
//       alert("Password reset link sent!");
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

//   export {
//     auth,
//     db,
//     signInWithGoogle,
//     signInWithEmailAndPassword,
//     registerWithEmailAndPassword,
//     sendPasswordResetEmail,
//     logout,
//   };