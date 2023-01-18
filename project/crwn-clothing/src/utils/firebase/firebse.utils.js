import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc, //get the document instance
    getDoc, //get the document data
    setDoc //set the document data
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsBsEGaEzIOm-GiemlV46l3Cak5N-dBwY",
    authDomain: "crwn-clothing-db-36f24.firebaseapp.com",
    projectId: "crwn-clothing-db-36f24",
    storageBucket: "crwn-clothing-db-36f24.appspot.com",
    messagingSenderId: "125755502905",
    appId: "1:125755502905:web:781bc694777fd5c8c238e8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.log('error creating the user.', error.message);
        }
    }

    return userDocRef;
}