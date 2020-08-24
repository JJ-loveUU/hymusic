import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@/assets/css/reset.css'

import store from './store'

import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <App />
    <div>哈哈哈啊122225555</div>
  </Provider>
  ,
  document.getElementById('root')
);

