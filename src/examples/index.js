import React from 'react';
import ReactDOM from 'react-dom';
import smoothJump from 'smooth-jumper';
import App from './App';
import style from './scss/main.scss';

/*
 * Ensure the function is accessible for the vanilla
 * index.html example
 */
window.smoothJump = smoothJump;

/*
 * Only render the React version if the #app DOM
 * element exists
 */
if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
