import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbozXMt_TFSbDK6e7ySR7dsLKNnSTu-vg",
  authDomain: "semester-webprojekt.firebaseapp.com",
  databaseURL: "https://semester-webprojekt.firebaseio.com",
  projectId: "semester-webprojekt",
  storageBucket: "semester-webprojekt.appspot.com",
  messagingSenderId: "118920865757",
  appId: "1:118920865757:web:e091e00a48dccb002f7834"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const dbMenuAdd = db.collection('menuItems');
export const dbExerciseAdd = db.collection('exercise');