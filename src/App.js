import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header';
import CheckoutPage from './pages/chechkout/checkout';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import { selectCollectionsPreview } from './redux/shop/shop.selectors';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    //addCollectionAndDouments('collections', collections.map(({title, items})=>({title, items})));
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
    //   if (user) {
    //     const userRef = await createUserProfileDocument(user);
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapshot.id,
    //           ...snapshot.data()
    //         }
    //       }, () => {
    //         console.log(this.state);
    //       })
    //     })
    //   } else {
    //     setCurrentUser(user)
    //   }

    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact component={HomePage} path='/' />
          <Route component={ShopPage} path='/shop' />
          <Route component={CheckoutPage} path='/checkout' />
          <Route render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInSignUpPage />} path='/sign' />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectCollectionsPreview
})


export default connect(mapStateToProps)(App);
