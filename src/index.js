import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FireBaseContext } from './context/FirebaseContext';
import { firebase } from "./auth/config";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <React.StrictMode>
    <FireBaseContext.Provider value={{ firebase }}>
      <App />
    </FireBaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
