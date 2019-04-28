import * as constants from '../constants/userConstants';

const initialState = {
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        user: {
          ...action.payload,
        },
      };
    case constants.USER_SIGNIN_FAIL:
      return {
        ...state,
        error: true,
      };
    case constants.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        user: {
          ...action.payload,
        },
      };
    case constants.USER_REGISTER_FAIL:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default userReducer;
