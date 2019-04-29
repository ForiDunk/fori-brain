import * as constants from '../constants/faceRecognitionConstants';
import { USER_SIGN_OUT } from '../constants/userConstants';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  error: false,
};

const calculateFaceLocation = data => {
  // TODO: make this to work with multiple faces
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - clarifaiFace.right_col * width,
    bottomRow: height - clarifaiFace.bottom_row * height,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FR_INPUT_CHANGE:
      return {
        ...state,
        input: action.payload.target.value,
      };
    case constants.FR_INIT:
      return {
        ...state,
        imageUrl: action.payload,
      };
    case constants.FR_SUCCESS:
      return {
        ...state,
        box: calculateFaceLocation(action.payload),
      };
    case constants.FR_FAIL:
      return {
        ...state,
        error: true,
      };
    case USER_SIGN_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
