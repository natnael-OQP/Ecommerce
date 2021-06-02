/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './pages/homepage.component.jsx';
import shopPage from './pages/Shop/ShopPage.component.jsx'


function App() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
        <Route  path="/shop" component={shopPage} />
      </div>
    )
}

export default App;
