import React from 'react';
import './style/menu-items.css';

const MenuItems = ({title,imageUrl,size}) => (
    // style div background-image with reatc stayel  attributes wright value in camel case
    <div  className={`menu-items ${size}`} > 
        <div className="background-image" style={
        {backgroundImage: `Url(${imageUrl})`}
    } />
        <div className="content">
            <h2 className="title">{title}</h2>
            <span className="sub-title">Shop now</span>
        </div>
    </div>
)

export default MenuItems;