import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

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

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, name, password } = user;
        try {
            await userRef.set({
                name,
                email,
                password,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};