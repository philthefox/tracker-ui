
/* eslint-disable no-console */

import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Page from './Page.jsx';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw/sw.js', { scope: './sw/' })
    .then((reg) => {
      // registration worked
      console.log(`Registration succeeded. Scope is ${reg.scope}`);
    }).catch((error) => {
      // registration failed
      console.log(`Registration failed with ${error}`);
    });
}

const element = (
  <Router>
    <Page />
  </Router>
);

ReactDOM.render(element, document.getElementById('contents'));

if (module.hot) {
  module.hot.accept();
}
