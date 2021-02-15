import { authConstants } from "../constants/authConstants";
import { authService } from "../services/auth.services";
import {userActions} from "../actions/user.actions";
import { AsyncStorage } from "react-native";

export const authActions = {
  login,
  getUserToken,
  saveUserToken,
  deleteUserToken,
  clearLoginErrors,
};


function login(username, password) {
  return (dispatch) => {
    dispatch(request(username));

    authService
      .login(username, password)
      .then((auth) => {
        
        userActions.saveUserId(auth.id)
        dispatch(saveUserToken(auth.token))
        dispatch(success());
      })
      .catch((error) => {
        const errorMessage = error.response.data.error;
        dispatch(failure(errorMessage));
      });
  };

  function request(user) {
    return { type: authConstants.LOGIN_REQUEST };
  }
  function success(user) {
    return { type: authConstants.LOGIN_SUCCESS };
  }
  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
  function saveToken() {
    return { type: authConstants.SAVE_TOKEN };
  }
}

function getUserToken() {
  return (dispatch) => {
    authService
      .getItem("token")
      .then((value) => {
        dispatch(getToken(value));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function getToken(token) {
    return { type: authConstants.GET_TOKEN, token };
  }
}

function saveUserToken(token) {
  return (dispatch) => {
    authService.saveItem("token", token).then((token) => {
      
      dispatch(saveToken(token));
    });
  };

  function saveToken(token) {
    return { type: authConstants.SAVE_TOKEN, token };
  }
}



function deleteUserToken() {
  return (dispatch) => {
    authService.deleteItem("token").then((value) => {
      dispatch(deleteToken());
    });
  };

  function deleteToken() {
    return { type: authConstants.DELETE_TOKEN };
  }
}

function clearLoginErrors() {
  return {
    type: authConstants.CLEAR_LOGIN_ERRORS,
  };
}
