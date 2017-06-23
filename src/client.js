"use strict"
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';
import logger from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

window.store = store;
const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BooksList} />
        <Route path="/admin" component={BooksForm}/>
        <Route path="/cart" component={Cart}/>
      </Route>
    </Router>
  </Provider>
)

render(
  Routes, document.getElementById('app')
);

// store.dispatch(deleteBooks(
//   {id: 1}
// ))
//
// store.dispatch(updateBooks(
//   {
//     id:2,
//     title: 'Learn React in 24h'
//   }
// ))
//
// store.dispatch(addToCart([{id: 1}]))
