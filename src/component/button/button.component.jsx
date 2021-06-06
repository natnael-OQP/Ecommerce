import React from 'react';
import './style/btn-style.css';

const Btn = ({children,...otherProps})=>(
    <button className="btn" {...otherProps} >{children}</button>
)
export default Btn;