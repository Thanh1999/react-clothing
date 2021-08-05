import { useState } from 'react';
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../button/button';
import { signInWithEmail, signInWithGoogle } from '../../redux/user/user.action';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })

    const handleSubmit = (event) => {
        event.preventDefault();
        emailSignInStart(userCredentials)

    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput name="email" value={userCredentials.email}
                required handelChange={handleChange} label='Email' />
            <FormInput name="password" type='password'
                value={userCredentials.password} required
                handelChange={handleChange} label='Password' />
            <div className='buttons'>
                <CustomButton type='submit'>Sign in</CustomButton>
                <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
            </div>
        </form>
    </div>
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(signInWithGoogle()),
    emailSignInStart: (userCredentials) =>
        dispatch(signInWithEmail(userCredentials))
});

export default connect(
    null,
    mapDispatchToProps
)(SignIn);
