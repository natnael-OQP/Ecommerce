import React from 'react';
import './style/btn-style.css';

const Btn = ({googleauth,children, ...otherProps  })=>(
    <button className={`${googleauth ? "googleButton":''} btn`} {...otherProps} >{children}</button>
)
export default Btn;