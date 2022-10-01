import { combineReducers } from "redux";

import authReducer from './authReducer';
import postReducer from './postReducer';
import adminReducer from "./adminReducer";
import commandReducer from './commandReducer';
import storyReducer from './storyReducer';
export const reducers =combineReducers({authReducer,postReducer,adminReducer,commandReducer,storyReducer})