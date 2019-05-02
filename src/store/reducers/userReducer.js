import * as constants from '../constants/userConstants';

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
  isSignedIn: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_SIGNIN_SUCCESS:
    case constants.USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: {
          ...action.payload,
        },
        isSignedIn: true,
      };
    case constants.USER_SIGNIN_FAIL:
    case constants.USER_REGISTER_FAIL:
      return {
        ...state,
        error: true,
      };
    case constants.USER_SIGN_OUT:
      return {
        ...initialState,
      };
    case constants.USER_UPDATE_COUNT:
      return {
        ...state,
        user: {
          ...state.user,
          entries: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
