import {userConstants} from "../constants/userConstants";
import {userService} from "../services/user.services";

export const userActions = {
  getUser,
  saveUserId
};

function getUser(id) {
  return (dispatch) => {
    
    dispatch(success(userService.getUser(id)));
  };

  function request() {
    return {
      type: userConstants.GET_USER_REQUEST
    };
  }
  function success(user) {
  
    return {
      type: userConstants.GET_USER_SUCCESS,
      user
    };
  }
  function failure() {
    return {
      type: userConstants.GET_USER_FAILURE,
      error
    };
  }
}

function saveUserId(id) {
  return (dispatch) => {
    userService.saveItem("id", id).then((id) => {
      dispatch(success(id));
    });
  };

  function success(id) {
    return { type: userConstants.SAVE_USER_ID, id };
  }
}