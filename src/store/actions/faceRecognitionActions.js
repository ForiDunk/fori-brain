import * as constants from '../constants/faceRecognitionConstants';
import { USER_UPDATE_COUNT } from '../constants/userConstants';

export const frInputChange = data => {
  return {
    type: constants.FR_INPUT_CHANGE,
    payload: data,
  };
};

export const frInit = ({ input, userId }) => dispatch => {
  dispatch({ type: constants.FR_INIT, payload: input });
  fetch('https://fierce-woodland-79565.herokuapp.com/imageurl', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: input,
    }),
  })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('https://fierce-woodland-79565.herokuapp.com/image', {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: userId,
          }),
        })
          .then(response => response.json())
          .then(count => {
            dispatch({ type: USER_UPDATE_COUNT, payload: count });
          })
          .catch(err => dispatch({ type: constants.FR_FAIL }));
      }
      dispatch({ type: constants.FR_SUCCESS, payload: response });
    })
    .catch(err => dispatch({ type: constants.FR_FAIL }));
};
