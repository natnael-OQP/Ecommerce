import React from 'react';
import SignIn from '../../component/signIn/signIn.component';
import SignUp from '../../component/sign-up/sign-up.component'
import './style/sign-in-out.css'

const SignInOut = ()=>(
    <div className="Sign-in-Out-page">
        <div className="sign-in-option">
           <SignIn/>
        </div>
        <div className="sign-up-option">
            <SignUp/>
        </div>
    </div>
)

export default SignInOut;