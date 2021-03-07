import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@/assets/css/reset.css'

import store from './store'

import App from './App';
import jquery from 'jquery'

window.jQuery = jquery;


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

