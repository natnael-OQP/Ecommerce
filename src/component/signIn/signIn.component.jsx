import React from 'react';
import './style/signIn.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange = (e)=>{
        const {name,value} = e.target;
        this.setState({[name]:value});
    }
    render() {
        return(
            <div className="sign-in-wrapper">
                <h2>I Allready have An Account</h2>
                <span>Sign in Your Email and Password</span>
                {/* form */}
                <form onSubmit={this.handleSubmit} >
                    <div className="input">
                        <label for="email" >email</label>
                        <input
                            type="email" 
                            name="email"  
                            placeholder="Enter your email" 
                            value={this.state.email} 
                            onChange={this.handleChange}
                            required 
                        />
                    </div>
                    {/* password */}
                    <div className="input">
                        <label for="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            value={this.state.password}
                            onChange={this.handleChange}  
                            required 
                        />
                    </div>
                    <input type="submit" name="submit" />
                </form>
            </div>
        )
    }
}


export default SignIn;