import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Routes from './routes';
import rootReducer from './reducers';

// createStore - Creates the redux store that holds the complete state tree of your app. 
// applyMiddleware - Lets you wrap the store's dispatch methods. ie) different middlewares
// promiseMiddleware - can be used to handle async action creators
// ReduxThunk - Redux Thunk middleware allows you to write action creators that return a function instead of an action
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
