import React from 'react';
import './collection_style/collection-preview.st.css';
import CollectionItems from '../collection-items/collection-items.component'
const CollectionPreview = ({title,items})=>(
    <div className="preview-component">
        <h1 className="preview-title">{title}</h1>
        <div className="preview-items-container">
            {
                items.filter((item,index)=>index < 4 )
                .map(({id,...otherProps})=> (
                    <CollectionItems key={id} {...otherProps}  />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;