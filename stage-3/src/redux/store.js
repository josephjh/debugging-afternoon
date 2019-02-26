import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import {createStore, applyMiddleware} from 'redux'

const Store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));

export default Store

