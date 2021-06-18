import React from 'react';
import ReactDOM from 'react-dom';
// react-router-dom
import {BrowserRouter} from 'react-router-dom';
// Redux
import {Provider} from 'react-redux'
//store
import store from './Redux/store'
// style
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <React.StrictMode>
        <App /> 
      </React.StrictMode>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
