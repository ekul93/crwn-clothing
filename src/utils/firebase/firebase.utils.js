import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6JMXS0jmyhlaRLjmRyL8D6QYPScMgBeg",
    authDomain: "crwn-clothing-db-27ec2.firebaseapp.com",
    projectId: "crwn-clothing-db-27ec2",
    storageBucket: "crwn-clothing-db-27ec2.appspot.com",
    messagingSenderId: "849931266667",
    appId: "1:849931266667:web:0945541729c6ce037edf2e"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account" 
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocref = doc(db, 'users', userAuth.uid);

    console.log(userDocref);
  }