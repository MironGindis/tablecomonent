import tableReducer from './table-reducer';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    tableList :  tableReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;