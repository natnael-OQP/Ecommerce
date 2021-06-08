import React from "react";
import {Link} from 'react-router-dom';
import './style/header.style.css'

import {ReactComponent as Logo} from '../../assets/4.3 crown.svg'
import { auth } from "../../firebase/firebase";

const Header = ({currentUser})=>(
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
                currentUser ? 
                    <div className="option left" onClick={() => auth.signOut() } >Sign out</div>
                :
                    <Link className="option left" to="/sign" > Sign in </Link>
            }
        </div>
    </div>
)

export default Header;