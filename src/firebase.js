import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBhk_OpkAFlsHPig2kmnpSN2WaEnlpJkUg",
  authDomain: "interior-quiz-2ba84.firebaseapp.com",
  databaseURL: "https://interior-quiz-2ba84.firebaseio.com",
  projectId: "interior-quiz-2ba84",
  storageBucket: "interior-quiz-2ba84.appspot.com",
  messagingSenderId: "923796060885",
  appId: "1:923796060885:web:0e6fa1ae7b4b7a7f89805c"
};

firebase.initializeApp(config);

const firestoreDb = firebase.firestore();

export const fetchCollection = collectionName =>
  firestoreDb
    .collection(collectionName)
    .get()
    .then(data => data.docs.map(doc => doc.data()));

export default firebase;
