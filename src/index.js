import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';

import movies from './reducers'

// the movie inside is the reducer

const store = createStore(movies); // get the initial state
console.log('store', store);
console.log('STATE', store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

