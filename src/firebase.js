// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDQBRTnpN1RX4tWGQlJAl4baUzkkiNJsHE",
  authDomain: "clone-2534d.firebaseapp.com",
  projectId: "clone-2534d",
  storageBucket: "clone-2534d.appspot.com",
  messagingSenderId: "386145283198",
  appId: "1:386145283198:web:d75c03d71fbdfdbd1bfc2f",
  measurementId: "G-0MKHYSGS9X"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {db,auth};