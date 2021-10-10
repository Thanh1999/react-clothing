import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header';
import { User } from './model/User';
import CheckoutPage from './pages/checkout/CheckoutPage';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import { RootState } from './redux/root-state';
import { checkUserSession } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';

interface IDemo {
  checkUserSession: Function,
  currentUser: User
}


const App: React.FC<IDemo> = ({ checkUserSession, currentUser }) => {

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

const mapStateToProps = createStructuredSelector<RootState, {
  currentUser: User
}>({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
