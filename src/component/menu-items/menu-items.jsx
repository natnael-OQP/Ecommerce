import React from 'react';
import './style/menu-items.css';
import {withRouter} from 'react-router-dom';
const MenuItems = ({title,imageUrl,size,history,links}) => (
    <div  className={`menu-items ${size}`}
        onClick={() =>{
            history.push(`${links}`) 
        }} > 
        <div className="background-image" style={
            {backgroundImage: `Url(${imageUrl})`}
        } />
        <div className="content">
            <h2 className="title">{title}</h2>
            <span className="sub-title">Shop now</span>
        </div>
    </div>
)

export default withRouter(MenuItems);