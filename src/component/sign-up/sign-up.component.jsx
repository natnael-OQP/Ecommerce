import React from 'react';
import { auth, createUserProfile } from '../../firebase/firebase';

import Btn from '../button/button.component';
import FormInput from '../form-input/form-Input.component';
import './style/sign-up.css'

class SignUp extends React.Component{
    constructor(props){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;        
        // if password match
        if(password !== confirmPassword){
            alert("password mismatch !")
            return;
        }
        try
        {            
            const {user} = await auth.createUserWithEmailAndPassword(email,password).catch(function(err){
                var errorCode =  err.code;
                var errorMessage = err.message
                if(errorCode === 'auth/weak-password'){
                    alert("this password too weak")
                }
                else{
                    alert(errorMessage);
                }
            });
            await createUserProfile(user,{displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        }
        catch (error) {
            console.error(error);
        }
    }
    handelChange = (e)=>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }
    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-up-container">
                <div className="sign-up-text">
                    <h2>I Don't Have An Account Yet </h2>
                    <span>Sign Up With Your Email and Password</span>
                </div>
                <form className="form" action="" onSubmit={this.handleSubmit}>
                    {/* User name */}
                    <div className="input">
                        
                        <FormInput
                            type="text"
                            placeholder="Enter your Full name"
                            name="displayName"
                            value={displayName}
                            required
                            handelChange={this.handelChange}
                        />
                    </div>
                    {/* email  */}
                    <div className="input">
                        <FormInput
                            type="email"
                            placeholder="email address"
                            name="email"
                            value={email}
                            required
                            handelChange={this.handelChange}
                        />
                    </div>
                    {/* password */}
                    <div className="input">
                        <FormInput
                            type="password"
                            placeholder="password"
                            name="password"
                            value={password}
                            required
                            handelChange={this.handelChange}
                        />
                    </div>
                    {/* confirm password*/}
                    <div className="input">
                        <FormInput
                            type="password"
                            placeholder="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            required
                            handelChange={this.handelChange}
                        />
                    </div>
                    <div className="btn-container">
                        <Btn type="submit" >SIGN UP</Btn>
                    </div>
                </form>
            </div>            
        )
    }
}

export default SignUp;