import React from 'react';
// import the render function from react-dom
import { render } from 'react-dom';
import App from '../components/App'

render(
  // define the encompassing component, ../components/App.js,
  // and the DOM element we want to mount it to
  <App/>,
  document.getElementById("app")
)
