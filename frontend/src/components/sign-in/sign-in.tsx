import { ChangeEvent, FormEvent, useState } from 'react';
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../button/button';
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.action';
import { Dispatch } from 'redux';

interface ISignIn {
    onEmailSignIn: Function,
    onGoogSignIn: Function
}

const SignIn: React.FC<ISignIn> = ({ onEmailSignIn, onGoogSignIn }) => {
    const [userCredentials, setuserCredentials] = useState({
        email: '',
        password: ''
    })

    const { email, password } = userCredentials;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onEmailSignIn(email, password);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setuserCredentials({
            ...userCredentials,
            [name]: value
        });
    };

    return <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput name="email" value={email}
                required handelChange={handleChange} label='Email' />
            <FormInput name="password" type='password'
                value={password} required
                handelChange={handleChange} label='Password' />
            <div className='buttons'>
                <CustomButton type='submit'>Sign in</CustomButton>
                <CustomButton type='button' onClick={onGoogSignIn} isGoogleSignIn>Sign in with Google</CustomButton>
            </div>
        </form>
    </div>
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onGoogSignIn: () => dispatch(googleSignInStart()),
    onEmailSignIn: (email: string, password: string) => dispatch(emailSignInStart(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn)