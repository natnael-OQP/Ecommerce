import React from 'react';
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
                            handelChange={this.handelChange}
                            required
                        />
                    </div>
                    {/* password */}
                    <div className="input">
                        <FormInput 
                            type="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            value={this.state.password}
                            onChange={this.handelChange}
                            required
                        />
                    </div>
                    <Btn type="submit" name="submit" >Sign in</Btn>  
                </form>
            </div>
        )
    }
}

export default SignIn;
