import { useState } from 'react';

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    signInWithGoogleRedirect
} from '../../utils/firebase/firebse.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // try {
            // const response = await signInAuthUserWithEmailAndPassword(email, password);
            signInUser();
            resetFormFields();
        // } catch (e) {
        //     console.log(e);
        // }
    }

    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        const { user } = response;
        await createUserDocumentFromAuth(user);
    }

    const signInUser = async () => {
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
        } catch (e) {
            switch(e.code){
                case "auth/wrong-password":
                    alert('Incorrect password for email');
                    break;
                case "auth/user-not-found":
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(e);
            }
        }
    }

    return (
        <div className='sign-in-container' >
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>

                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Sign in with Google</Button>
                </div>
                {/* <Button type='button' buttonType='google' onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</Button> */}

            </form>
        </div>
    )
}

export default SignInForm;