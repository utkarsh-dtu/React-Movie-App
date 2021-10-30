import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';

import movies from './reducers'

// the movie inside is the reducer

const store = createStore(movies); // get the initial state (movie is the reducer which returns new states to the store)
console.log('store', store);
// console.log('BEFORE-STATE', store.getState());


// using dispatch, we can send action to the reducer and that reducer will send a new state to the store (assing to the movies reducer in this case)
// indirectly , we are updating a state in the store

// triggering an action to the reducer
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies : [{name : 'Superman'}]
// });

// console.log('After-STATE', store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

