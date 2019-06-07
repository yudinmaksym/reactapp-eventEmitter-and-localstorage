import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var EventEmitter = require('wolfy87-eventemitter');
window.ee = new EventEmitter();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
