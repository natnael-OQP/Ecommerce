import React from 'react';
import './style/cart.css'
import {ReactComponent as CartSvg} from '../../assets/shopping-bag.svg'
const Cart = () => (
    <div className="cart-container">
        <CartSvg className="bag-svg"/>
        <span className="item-count" >0</span>
    </div>
)

export default Cart;