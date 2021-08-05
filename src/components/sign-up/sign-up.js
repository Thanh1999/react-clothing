import FormInput from '../form-input/form-input'
import CustomButton from '../button/button'
import './sign-up.scss'
import { useState } from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../redux/user/user.action';

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert(`password don't match`);
            return;
        }

        signUpStart(userCredentials);

    }

    const handelChange = event => {
        const { name, value } = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return <div className='sign-up'>
        <h2 className='title'>Not have an account?</h2>
        <span>Sign up with email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput type='text'
                name='displayName'
                value={displayName}
                handelChange={handelChange}
                label='Display Name'
                required
            />

            <FormInput type='text'
                name='email'
                value
                ={email}
                handelChange={handelChange}
                label='Email'
                required
            />

            <FormInput type='password'
                name='password'
                value={password}
                handelChange={handelChange}
                label='Password'
                required
            />

            <FormInput type='password'
                name='confirmPassword'
                value={confirmPassword}
                handelChange={handelChange}
                label='Confirm Password'
                required
            />

            <CustomButton type='submit'>Sign UP</CustomButton>
        </form>
    </div>
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUp(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp)