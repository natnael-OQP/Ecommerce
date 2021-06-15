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
    super();
    this.state = {
      current_user: null,
    }
  }

  unSubscribe = null;

  componentDidMount() {
    this.unSubscribe = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const docRef = await createUserProfile(userAuth);
        docRef.onSnapshot(snapshot =>{
          this.setState({
            current_user:{
              id:snapshot.id,
              ...snapshot.data(),
            } 
          },()=>{
            console.log(this.state.current_user);
          })
        })
      }
      this.setState({current_user:userAuth})
      
    })
  }
  // when connection lost 
  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.current_user}  />
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
