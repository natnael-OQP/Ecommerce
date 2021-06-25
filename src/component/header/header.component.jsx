import React from "react";
import {Link} from 'react-router-dom';
import './style/header.style.css'
// logo
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg'
// firebase
import { auth } from "../../firebase/firebase";
// redux
import { connect } from 'react-redux';
// component 
import Cart from '../cart/cart.component'

// header
const Header = ({ current_user })=>(
    <div className="header-container">
        <Link className="logo-container" to="/" >
            <Logo className="logo"/>
        </Link>
        {/* options */}
        <div className="options">
            <Link className="option" to='/shop' >
                shop
            </Link>
            <Link className="option" to='/contact' >
                contact
            </Link>
            {
                current_user? 
                <div className="option left" onClick={() => auth.signOut() } >Sign out</div>
                :
                <Link className="option left" to="/sign" > Sign in </Link>
            }
            <Cart/>
            {
                current_user? 
                    <div className="profile-pic auth-pic">
                        <img className="user-src" src={`${current_user.photoURL}`} alt="user" />
                        <span className="name">{current_user.displayName}</span>
                    </div>
                :
                    <div className="profile-pic">
                        <img src="data:image/png;base64,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" alt="user profile" />
                    </div>
                
            }
        </div>
    </div>
)
const mapStateToProps = state => ({
    current_user:state.user.current_user
})
export default connect(mapStateToProps)(Header);