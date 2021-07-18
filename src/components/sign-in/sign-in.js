import { Component } from 'react';
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../button/button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            })

        } catch (error) {
            console.error(error)
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" value={this.state.email}
                    required handelChange={this.handleChange} label='Email' />
                <FormInput name="password" type='password'
                    value={this.state.password} required
                    handelChange={this.handleChange} label='Password' />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    }
}

export default SignIn