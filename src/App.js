
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase/config';
import { useContext, useEffect } from 'react';
import { StateContext } from './context/StateContext';

function App() {

  const [{}, dispatch] = useContext(StateContext);

  useEffect(() => {
    console.log('In useeffect >>>>>>');

    auth.onAuthStateChanged(authUser => {
      console.log('User is >>>', authUser);

      if(authUser){
        //User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //logged Out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
