import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Charger from './components/Charger';



const App = () => {
  return (


    <Router>
      <NavigationBar />

      <Switch>

        <Route path="/profile">
          <h1>Welcome !!!</h1>
        </Route>

        <Route path="/">

          <div className="App">
            {  /*<img src={logo} className='App-logo' alt='logo'/> */}

            <Charger />
          </div>

        </Route>

      </Switch>

    </Router>

  );
};

export default App;
