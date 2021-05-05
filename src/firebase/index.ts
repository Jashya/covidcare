import Firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

import { FirebaseConfig } from "../firebase.config";

export const firebase = Firebase.initializeApp(FirebaseConfig);
export const Store = firebase.firestore()
export const Auth = firebase.auth()
export const GoogleProvider = new Firebase.auth.GoogleAuthProvider()