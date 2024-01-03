import { combineReducers, createStore } from "redux";
import { counterReducer, textReducer } from "./reducers";
// import {combineReducers} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  count: counterReducer,
  text: textReducer,
});

export const store = createStore(rootReducer);
