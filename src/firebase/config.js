import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAGDMt1WRfM-OpoZidG1HjT7RLo_2oCwoI",
  authDomain: "react-http-cb53c.firebaseapp.com",
  databaseURL: "https://react-http-cb53c-default-rtdb.firebaseio.com",
  projectId: "react-http-cb53c",
  storageBucket: "react-http-cb53c.appspot.com",
  messagingSenderId: "503816660369",
  appId: "1:503816660369:web:e2bcbe82a4b73d82b4e630",
  measurementId: "G-D186MP5TTF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
