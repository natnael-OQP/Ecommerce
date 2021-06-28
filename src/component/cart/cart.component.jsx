import React from "react";
import "./style/cart.css";
import { ReactComponent as CartSvg } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { CartActionType } from "../../Redux/cart/cart.action";
const Cart = ({ cartActionType }) => (
    <div className="cart-container">
        <CartSvg className="bag-svg" onClick={CartActionType} />
        <span className="item-count">0</span>
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    CartActionType: () => dispatch(CartActionType())
});
export default connect(null, mapDispatchToProps)(Cart);
