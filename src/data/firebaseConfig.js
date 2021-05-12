import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjxdFuJ3XF13mrGzAyKPLfkiZ-xIZXoKc",
    authDomain: "sushi-ecommerce-973c1.firebaseapp.com",
    projectId: "sushi-ecommerce-973c1",
    storageBucket: "sushi-ecommerce-973c1.appspot.com",
    messagingSenderId: "447761531149",
    appId: "1:447761531149:web:a99d0790b6bc1866c13044",
    measurementId: "G-KCE1V582B0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;

