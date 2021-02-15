import { combineReducers } from 'redux'
import authReducer from "./auth.reducers.js"
import userReducer from "./user.reducers.js"

export default combineReducers({
   authReducer, userReducer
  })