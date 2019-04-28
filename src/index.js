import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import userReducer from './store/reducers/userReducer';
import faceRecognitionReducer from './store/reducers/faceRecognitionReducer';
import navigationReducer from './store/reducers/navigationReducer';

const rootReducer = combineReducers({
  userReducer,
  faceRecognitionReducer,
  navigationReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
