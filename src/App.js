import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';

const HatsPage = (props) => {
  console.log(props);
  return (<div>
    <h1>Hats Page</h1>

  </div>);
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path='/' />
        <Route component={HatsPage} path='/hats' />
      </Switch>
    </div>
  );
}

export default App;
