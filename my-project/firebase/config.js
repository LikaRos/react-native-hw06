// import * as firebase from "firebase";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCkEOE5yg9n9cNQN6iVI7C5-f96EDznlaY",
//   authDomain: "phone-react-native-proje-26179.firebaseapp.com",
//   projectId: "phone-react-native-proje-26179",
//   storageBucket: "phone-react-native-proje-26179.appspot.com",
//   messagingSenderId: "128782564670",
//   appId: "1:128782564670:web:2763a38bfd9d86162c806f",
//   measurementId: "G-1WQTG1YZ69",
// };

// Initialize Firebase
// export default firebase.initializeApp(firebaseConfig);

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkEOE5yg9n9cNQN6iVI7C5-f96EDznlaY",
  authDomain: "phone-react-native-proje-26179.firebaseapp.com",
  projectId: "phone-react-native-proje-26179",
  storageBucket: "phone-react-native-proje-26179.appspot.com",
  messagingSenderId: "128782564670",
  appId: "1:128782564670:web:2763a38bfd9d86162c806f",
  measurementId: "G-1WQTG1YZ69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import * as firebase from "firebase";

import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkEOE5yg9n9cNQN6iVI7C5-f96EDznlaY",
  authDomain: "phone-react-native-proje-26179.firebaseapp.com",
  projectId: "phone-react-native-proje-26179",
  storageBucket: "phone-react-native-proje-26179.appspot.com",
  messagingSenderId: "128782564670",
  appId: "1:128782564670:web:2763a38bfd9d86162c806f",
  measurementId: "G-1WQTG1YZ69",
};
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   };
firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();

export const firestore = firebase.firestore();

export const realtime = firebase.database();

export default firebase;
