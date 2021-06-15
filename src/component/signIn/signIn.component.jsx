import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase';
import Btn from '../button/button.component';
import FormInput from '../form-input/form-Input.component';
import './style/signIn.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:'', password:''});
    }
    handelChange = (e)=>{
        const {name,value} = e.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="signIn-container">
               <div className="sign-in-text">
                    <h2>I All ready have An Account</h2>
                    <span>Sign in Your Email and Password</span>
               </div>
                <form className="form" onSubmit={this.handleSubmit} >
                    {/* email */}
                    <div className="input">
                        <FormInput 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            value={this.state.email}
                            required
                            handelChange={this.handelChange}
                        />
                    </div>
                    {/* password */}
                    <div className="input">
                        <FormInput 
                            required
                            type="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            value={this.state.password}
                            onChange={this.handelChange}
                        />
                    </div>
                    <div className="btn-container">
                        <Btn type="submit" name="submit" >Sign in</Btn>  
                        <Btn onClick={signInWithGoogle} googleauth type="button" name="submit" >SignIn with Google</Btn>    
                    </div>  
                </form>
            </div>
        )
    }
}

export default SignIn;
