/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage.component.jsx';
import shopPage from './pages/Shop/ShopPage.component.jsx'
import Header from './component/header/header.component.jsx'
import SignInOut from './pages/sign-in-out/sign-in-out.page.jsx'
import { auth } from './firebase/firebase.js';


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentUser: null,
    }
  }
  unSubscribe = null;
  componentDidMount() {
    this.unSubscribe = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user})
      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  path="/shop" component={shopPage} />
          <Route path="/sign" component={SignInOut}/>
        </Switch>
      </div>
    )
  }
}

export default App;
