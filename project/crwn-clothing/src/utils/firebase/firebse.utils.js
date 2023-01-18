import { initializeApp } from 'firebase/app';
import { getAuth, 
         signInWithRedirect, 
         signInWithPopup, 
         GoogleAuthProvider } from 'firebase/auth';

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);