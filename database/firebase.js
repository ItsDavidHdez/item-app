import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBT0a1mcL9gIU36b5ih98ZA7oRrK6HV7I0",
  authDomain: "item-app-b4791.firebaseapp.com",
  databaseURL: "https://item-app-b4791-default-rtdb.firebaseio.com",
  projectId: "item-app-b4791",
  storageBucket: "item-app-b4791.appspot.com",
  messagingSenderId: "710256397617",
  appId: "1:710256397617:web:599b4847fa8bf612853410",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
