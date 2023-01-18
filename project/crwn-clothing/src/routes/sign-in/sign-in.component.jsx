import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebse.utils";


const SignIn = () => {
    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        console.log(response);
        const {user} = response;
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }

    return (
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser} >
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn;