import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyC5LNYGwPNKntyVhlB8PUevf7Yrk66L8HI",
    authDomain: "cvc-newsletter.firebaseapp.com",
    databaseURL: "https://cvc-newsletter.firebaseio.com",
    projectId: "cvc-newsletter",
    storageBucket: "cvc-newsletter.appspot.com",
    messagingSenderId: "890056079895",
    appId: "1:890056079895:web:3bcee7ac6179e112e9ba52",
    measurementId: "G-Q8QL4524X5"
});


let db = firebase.firestore();


export default {
  firebase, db
}