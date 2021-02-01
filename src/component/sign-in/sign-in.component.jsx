import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' });
        }
        catch (error) {
            console.log(error);
        }


    };
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2> I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        name='email'
                        type='email'
                        required />
                    {/* <label>Email</label> */}
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    {/* <label>Password</label> */}

                    <CustomButton type="submit" value="Submit form" > Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                        {' '}
                        Sign in with Google
                    {' '} </CustomButton >
                </form>
            </div>
        )
    }
}
export default SignIn;