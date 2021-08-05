import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header';
import CheckoutPage from './pages/chechkout/checkout';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import { isUserAuthenticated } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ currentUser, checkUserSession }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact component={HomePage} path='/' />
        <Route component={ShopPage} path='/shop' />
        <Route component={CheckoutPage} path='/checkout' />
        <Route render={() => currentUser ? (<Redirect to='/' />) : <SignInSignUpPage />} path='/sign' />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(isUserAuthenticated())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
