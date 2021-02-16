import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/header/Header';
import Clock from './Components/clock/Clock';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Header></Header>
      <Clock></Clock>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
