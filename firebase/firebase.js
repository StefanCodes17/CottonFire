import app from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyC6TYScd69kv5rAxmsJ9XaoLN53mV5F78w",
    authDomain: "cottonf-da181.firebaseapp.com",
    databaseURL: "https://cottonf-da181.firebaseio.com",
    projectId: "cottonf-da181",
    storageBucket: "cottonf-da181.appspot.com",
    messagingSenderId: "863415166306",
    appId: "1:863415166306:web:f271200f3958f671f5783b",
    measurementId: "G-63TTB3HG35"
};

const app = app.initializeApp(firebaseConfig)
const defaultFirestore = firebase.firestore(); var defaultFirestore = firebase.firestore();

export default { app, defaultFirestore }