import React from 'react';
import './style/menu-container.css';
import MenuItems from '../menu-items/menu-items';

class MenuContainer extends React.Component {
    constructor() {
        super();
        this.state ={
            selecture:[
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    links:'hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    links:'jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    links:'sneakers'
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large',
                    id: 4,
                    links:'womens'
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size:'large',
                    id: 5,
                    links:'mens'
                  }
            ]
        }
    }
    render(){
        return(

            <div className="menu-container">{     
                this.state.selecture.map(({id, ...otheroProps})=>(
                  <MenuItems key={id} {...otheroProps} />
                ))}
            </div>
        )
    }
}

export default MenuContainer