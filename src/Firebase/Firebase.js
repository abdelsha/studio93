import firebase from "firebase"; 
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDYSU2RgphX7IdL0UGcolBVCdf_ogm8y0M",
  authDomain: "studio93inc-c63ac.firebaseapp.com",
  projectId: "studio93inc-c63ac",
  storageBucket: "studio93inc-c63ac.appspot.com",
  messagingSenderId: "866810378859",
  appId: "1:866810378859:web:8a5b6ac500e050142acf2e",
  measurementId: "G-QKKN2049XV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();


export { auth,provider,storage};
export default db;