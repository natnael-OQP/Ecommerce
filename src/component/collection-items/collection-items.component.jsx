import React from 'react';
import './style/collection-item.style.css'

const CollectionItems = ({name,imageUrl,price})=>(
    <div className="collection-item">
        {/* image */}
        <div className="image"
         style={{
            backgroundImage: `Url(${imageUrl})`
         }}
        />
        {/* items information */}
        <div className="items-info">
            <span className="name">{name}</span>
            <span className="price" >{`${price} birr`}</span>
        </div>
        {/* button */}
        <button className="buttons"> ADD TO CART </button>
    </div>
)
export default CollectionItems;