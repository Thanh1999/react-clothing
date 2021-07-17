import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';

class App extends Component {

  constructor(){
    super();
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact component={HomePage} path='/' />
            <Route component={ShopPage} path='/shop' />
            <Route component={SignInSignUpPage} path='/sign' />
          </Switch>
      </div>
    );
  }
}

export default App;
