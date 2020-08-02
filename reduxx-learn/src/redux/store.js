import { createStore, applyMiddleware } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./rootReducer";
import logger from 'redux-logger'

// const store = createStore(cakeReducer);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
