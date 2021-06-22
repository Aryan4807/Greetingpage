import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css';
  

ReactDOM.render(
  <App />
  , document.getElementById('root')
)

const full=["aryan","gupta"];
const bio=[1,...full,"male"];
console.log(bio)