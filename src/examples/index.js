import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import style from './scss/main.scss';

/*
 * Only render the React version if the #app DOM
 * element exists
 */
if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
