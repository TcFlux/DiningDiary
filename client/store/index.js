import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunks from 'redux-thunk';
import axios from 'axios';


const reducer = combineReducers({});
const store = createStore(
  reducer,
  applyMiddleware(
    thunks.withExtraArgument({axios}),
    logger
  )
);

export default store;
