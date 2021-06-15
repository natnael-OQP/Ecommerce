/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage.component.jsx';
import shopPage from './pages/Shop/ShopPage.component.jsx'
import Header from './component/header/header.component.jsx'
import SignInOut from './pages/sign-in-out/sign-in-out.page.jsx'
import { auth, createUserProfile } from './firebase/firebase.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.displayName,
      email: props.email,
      photoURL: props.photoURL
    }
  }

  unSubscribe = null;

  componentDidMount() {
    this.unSubscribe = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const docRef = await createUserProfile(userAuth);
        console.log(docRef);
      }

    })
  }
  // when connection lost 
  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}  />
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
