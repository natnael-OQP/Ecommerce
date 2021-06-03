import React from "react";
import {Link} from 'react-router-dom';
import './style/header.style.css'
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg'
const Header = ()=>(
    <div className="header-container">
        <Link className="logo-container" to="/" >
            <Logo className="logo"/>
        </Link>
        {/* options */}
        <div className="options">
            <Link className="opstion" to='/shop' >
                shop
            </Link>
            <Link className="opstion" to='/contact' >
                contact
            </Link>
        </div>
    </div>
)

export default Header;