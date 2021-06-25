/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";

import Homepage from "./pages/homepage.component.jsx";
import shopPage from "./pages/Shop/ShopPage.component.jsx";
import Header from "./component/header/header.component.jsx";
import SignInOut from "./pages/sign-in-out/sign-in-out.page.jsx";
import { auth, createUserProfile } from "./firebase/firebase.js";
// redux
import { connect } from 'react-redux';
import { setCurrentUser } from "./Redux/user/acction.reducer.js";
class App extends React.Component {

  unSubscribe = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    // set user data in to our app 🍌🍌🍌
    this.unSubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const docRef = await createUserProfile(userAuth);
        docRef.onSnapshot((snapshot) => {
          setCurrentUser({
                id: snapshot.id,
                ...snapshot.data(),
            });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  // when connection lost
  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={shopPage} />
          <Route  path="/sign"
            render={() =>
              this.props.current_user ? (
                <Redirect to='/' />
              ) : (
                  <SignInOut />
              )
            }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  current_user: state.user.current_user,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
