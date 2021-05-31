
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/login">
            <h1> Hi this is Login page</h1>
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
