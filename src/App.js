import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes/routes";
import './App.css';
import NavigationBar from './components/navigationBar';
import Charger from './components/charger';
import SignUpForm from './components/signupform';



const App = () => {
  return (

    <Router>
      <NavigationBar />

      <Switch>
        <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
        <Route path={ROUTES.HOME} component={Charger} />
      </Switch>

    </Router>

  );
};

export default App;
