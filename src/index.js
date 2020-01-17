import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const catstore = {
  cats: [
    { id: 1, name: 'kitty', jelly: false },
    { id: 2, name: 'green kitty', jelly: false },
    { id: 3, name: 'ellie', jelly: true },
    { id: 4, name: 'deborah', jelly: false },
    { id: 5, name: 'pebble ephram', jelly: false },
    { id: 6, name: 'marigold', jelly: false },
  ],
  dogs: [],
};

function reducer(state = catstore, action) {
  // {
  //   type: 'JELLICIZE',
  //   id: catId
  // }

  switch (action.type) {
    case 'JELLICIZE':
      const cats = state.cats.map(cat => {
        if (action.id === cat.id) {
          cat.jelly = true;
        }
        return cat;
      });
      return { ...state, cats };
    default:
      return state;
  }
}
let store = createStore(reducer, catstore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
