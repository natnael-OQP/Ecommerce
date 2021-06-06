import React from "react";
import './style/form-input.css';

const FormInput = ({handelChange,...otherProps})=>(
    <input className="form-input"
        onChange={handelChange}
        {...otherProps}
    />
)

export default FormInput;