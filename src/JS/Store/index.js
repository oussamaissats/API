import { createHistogram, compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import combineReducer from "../Reducers"; 


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]

const store = createStore(combineReducer , composeEnhancers(applyMiddleware(...middleware))) 

export default store;