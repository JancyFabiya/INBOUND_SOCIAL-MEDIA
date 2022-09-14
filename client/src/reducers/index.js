import { combineReducers } from "redux";

import authReducer from './authReducer';
import postReducer from './postReducer';
import adminReducer from "./adminReducer";
export const reducers =combineReducers({authReducer,postReducer,adminReducer})