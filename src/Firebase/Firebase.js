import firebase from "firebase"; 
import React from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBgEdk-_yAo-J3c2MuFjvdUzC4ZrVazk00",
    authDomain: "studio93-fae8c.firebaseapp.com",
    projectId: "studio93-fae8c",
    storageBucket: "studio93-fae8c.appspot.com",
    messagingSenderId: "1008713688567",
    appId: "1:1008713688567:web:fa6a232a8727c7ca7d3af2",
    measurementId: "G-5PBZQFXCH7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();


export { auth,provider,storage};
export default db;