import React from 'react';
import './style/dropdown.css'
import Btn from '../button/button.component';
const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-item" />
        <Btn className="btn">CheckOut</Btn>
    </div>
)

export default CartDropdown;