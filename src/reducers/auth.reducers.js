import { authConstants } from "../constants/authConstants";

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      };

    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
       loggingIn: false
      };

    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loginErrorMessage: action.error
      };

    case authConstants.GET_TOKEN:
      return {
        ...state,
        token: action.token
      };

    case authConstants.SAVE_TOKEN:
      return {
        ...state,
        token: action.token
      };

    case authConstants.DELETE_TOKEN:
      return {};

    case authConstants.CLEAR_LOGIN_ERRORS:
      return {};

    case authConstants.LOGOUT:
      return {
        loginErrorMessage : ""
      };

    default:
      return state;
  }
}
