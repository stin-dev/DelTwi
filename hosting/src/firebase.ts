import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUWIboHpvkIy6sXTehSm56Y9-JfZpZqXw",
  authDomain: "deltwi.firebaseapp.com",
  databaseURL: "https://deltwi.firebaseio.com",
  projectId: "deltwi",
  storageBucket: "deltwi.appspot.com",
  messagingSenderId: "254471075162",
  appId: "1:254471075162:web:a1d5eebf664481b9cd6f63",
  measurementId: "G-YY7CKZXNR7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;