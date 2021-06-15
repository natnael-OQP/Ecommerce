import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../component/collection-preview/collection-preview.component.jsx';


class shopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA            
        }
    }
    render() {
        return(
            this.state.collections.map(({id,...children})=>(
                <CollectionPreview key={id} {...children} />
            ))
            
        )
    }
}

export default shopPage;