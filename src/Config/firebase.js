import  firebase from 'firebase'

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAikUWiRBzu132xGlhgnqhLjmt7WprUf0k",
    authDomain: "ecommerce-b48f0.firebaseapp.com",
    databaseURL: "https://ecommerce-b48f0-default-rtdb.firebaseio.com",
    projectId: "ecommerce-b48f0",
    storageBucket: "ecommerce-b48f0.appspot.com",
    messagingSenderId: "97314139701",
    appId: "1:97314139701:web:028ebb5c43be9d8f320b7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db=db;
export default firebase;