import {createStore, applyMiddleware} from 'redux';
import {reducers as reducers} from './reducers/index';
import thunk from 'redux-thunk';
const middleWares = [
  thunk,
];
export default createStore(reducers, applyMiddleware(...middleWares));
