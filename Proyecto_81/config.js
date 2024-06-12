import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDwZzPM78KJEgzgjIY5-sDNLTGUwfBKTYY",
  authDomain: "paseo-electronico-56a99.firebaseapp.com",
  projectId: "paseo-electronico-56a99",
  storageBucket: "paseo-electronico-56a99.appspot.com",
  messagingSenderId: "624975502472",
  appId: "1:624975502472:web:89752dad601011a0d4d33d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
