import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebse.utils";


const SignIn = () => {
    
    useEffect(() => {(
        // monsters = [{name: 'Leanne'}, {name: 'Clementine'}]
        async () => {
        const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
        })();
        // input = 'Lea' => filteredMonsters = [{name: 'Leanne'}]
    
        return () => {}
        
      }, []);
    
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    // }, []);

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        const { user } = response;
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
        </div>
    )
}

export default SignIn;
