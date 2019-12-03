import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppProviders from './context';
import * as serviceWorker from './serviceWorker';
import './fonts/Gotham-Rounded-Bold-Italic.ttf';
import './fonts/Gotham-Rounded-Bold.ttf';
import './fonts/Gotham-Rounded-Book-Italic.ttf';
import './fonts/Gotham-Rounded-Book.ttf';
import './fonts/Gotham-Rounded-Light-Italic.ttf';
import './fonts/Gotham-Rounded-Light.ttf';
import './fonts/Gotham-Rounded-Medium-Italic.ttf';
import './fonts/Gotham-Rounded-Medium.ttf';
import './index.css';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
