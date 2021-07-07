import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
// import { createBook } from './actions';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

/* const firstElements = [
  { id: 2, title: 'title 2', category: 'Boo' },
  { id: 3, title: 'title 3', category: 'Comedy' },
]; */

// firstElements.map((book) => store.dispatch(createBook(book)));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
