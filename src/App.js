import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Charger from './components/Charger';



const App = () => {
  return (
    <div className="App">
      {  /*<img src={logo} className='App-logo' alt='logo'/> */}
      <NavigationBar />
      <Charger />
    </div>
  );
};

export default App;
