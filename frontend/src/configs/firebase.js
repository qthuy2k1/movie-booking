import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiz4L6h8AbMf9rUJ104Qx2K5Xxb0XnmT0",
  authDomain: "movie-booking-367710.firebaseapp.com",
  projectId: "movie-booking-367710",
  storageBucket: "movie-booking-367710.appspot.com",
  messagingSenderId: "53767684006",
  appId: "1:53767684006:web:2d6f0b921b7e8c0d83d967",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

export { projectAuth };
