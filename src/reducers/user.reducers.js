import { userConstants } from "../constants/userConstants";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USER_SUCCESS:
  
      return {
        ...state,
          user: action.user.username
      }

    case userConstants.SAVE_USER_ID:
      return{
        ...state,
        userId: action.id
      }

      default:
        return state
  }
}
