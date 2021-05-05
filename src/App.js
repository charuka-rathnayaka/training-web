import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import SignIn from './SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='Pages'>
          <Switch>
            <Route exact path="/">
              <SignIn/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;