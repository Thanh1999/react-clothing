import FormInput from '../form-input/form-input'
import CustomButton from '../button/button'
import './sign-up.scss'
import { Component } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert(`password don't match`);
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    }

    handelChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return <div className='sign-up'>
            <h2 className='title'>Not have an account?</h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput type='text'
                    name='displayName'
                    value={this.state.displayName}
                    handelChange={this.handelChange}
                    label='Display Name'
                    required
                />

                <FormInput type='text'
                    name='email'
                    value
                    ={this.state.email}
                    handelChange={this.handelChange}
                    label='Email'
                    required
                />

                <FormInput type='password'
                    name='password'
                    value={this.state.password}
                    handelChange={this.handelChange}
                    label='Password'
                    required
                />

                <FormInput type='password'
                    name='confirmPassword'
                    value={this.state.confirmPassword}
                    handelChange={this.handelChange}
                    label='Confirm Password'
                    required
                />

                <CustomButton type='submit'>Sign UP</CustomButton>
            </form>
        </div>
    }
}

export default SignUp