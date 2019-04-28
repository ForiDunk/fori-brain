import * as constants from '../constants/navigationConstants';
import { USER_SIGNIN_SUCCESS, USER_SIGN_OUT } from '../constants/userConstants';

const initialState = {
  isSignedIn: false,
  route: 'signin',
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return {
        isSignedIn: true,
        route: 'home',
      };
    case USER_SIGN_OUT:
      return {
        ...initialState,
      };
    case constants.NAV_NAVIGATE:
      return {
        isSignedIn: false,
        route: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
