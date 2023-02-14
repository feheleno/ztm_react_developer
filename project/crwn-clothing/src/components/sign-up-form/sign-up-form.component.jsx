import { useState, useContext } from 'react';

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebse.utils';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component'

import './sign-up-form.styles.scss';
import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { seteCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
            const { user } = response;
            seteCurrentUser(user);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (e) {
            if (e === 'auth/email-already-in-use') { alert('Cannot create user, email already in use') }
            else { console.log('user creation encountered an error', e); }
        }
    }

    return (
        <div className='sign-up-container' >
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName} />

                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />

                <FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default SignUpForm;