import * as constants from '../constants/userConstants';

export const signIn = (email, password) => dispatch => {
  dispatch({ type: constants.USER_SIGNIN_PENDING });
  fetch('https://fierce-woodland-79565.herokuapp.com/signin', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        return dispatch({ type: constants.USER_SIGNIN_SUCCESS, payload: user });
      } else {
        return dispatch({ type: constants.USER_SIGNIN_FAIL });
      }
    })
    .catch(error => dispatch({ type: constants.USER_SIGNIN_FAIL }));
};

export const register = (email, password, name) => dispatch => {
  dispatch({ type: constants.USER_REGISTER_PENDING });
  fetch('https://fierce-woodland-79565.herokuapp.com/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        return dispatch({
          type: constants.USER_REGISTER_SUCCESS,
          payload: user,
        });
      } else {
        return dispatch({ type: constants.USER_REGISTER_FAIL });
      }
    })
    .catch(error => dispatch({ type: constants.USER_REGISTER_FAIL }));
};

export const signOut = () => {
  return {
    type: constants.USER_SIGN_OUT,
  };
};
