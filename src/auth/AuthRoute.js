import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// const AuthRoute = ({ auth, path, component: Component }) => {
//   if (auth) {
//     return <Route exact path={path} component={Component} />;
//   } else {
//     return <Redirect exact from={path} to="/signin" />;
//   }
// };

const AuthRoute = ({ component: Component, isSignedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isSignedIn === true ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

const mapStateToProps = state => {
  console.log(state);
  return {
    isSignedIn: state.userReducer.isSignedIn,
  };
};

export default connect(
  mapStateToProps,
  null,
)(AuthRoute);
