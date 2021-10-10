import FormInput from '../form-input/form-input'
import CustomButton from '../button/button'
import './sign-up.scss'
import { ChangeEvent, FormEvent, useState } from 'react'
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.action';
import { Dispatch } from 'redux';

interface ISignUp {
    signUpStart: Function
}


const SignUp: React.FC<ISignUp> = ({ signUpStart }) => {

    const [userCredentials, setuserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password.trim().length < 6) {
            alert("passwords from 6 characters");
            return;
        }
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    }

    const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setuserCredentials({
            ...userCredentials,
            [name]: value
        });
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signUpStart: (userCredentials: Map<any, any>) => dispatch(signUpStart(userCredentials))
});


export default connect(null, mapDispatchToProps)(SignUp)