import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App'
import './style/global.css'
// const reactContentRoot = document.getElementById('root')

// todo: hi ReactDOM i want to render "App" to reactContentRoot
ReactDOM.render(
  <App />, 
  document.getElementById('root')
  // reactContentRoot
)
