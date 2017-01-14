import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import combinedReducers from './reducers';

const appliedMiddleware = applyMiddleware(promise(), thunk, logger());

export default createStore(combinedReducers, appliedMiddleware);
