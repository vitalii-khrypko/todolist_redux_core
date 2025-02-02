import {combineReducers, createStore} from 'redux';
import todoReducer from "./todoReducer";

let reducers = combineReducers({
    todo: todoReducer
});

let store = createStore(reducers);

export default store;