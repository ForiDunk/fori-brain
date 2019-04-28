import React from 'react';
import { connect } from 'react-redux';
import { navTo } from '../../store/actions/navigationActions';
import { signOut } from '../../store/actions/userActions';
import './Navigation.css';

const Navigation = ({ isSignedIn, navTo, signOut }) => {
  if (isSignedIn) {
    return (
      <nav className="Navigation">
        <p
          onClick={signOut}
          className="f3 link dim black underline pa3 pointer">
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="Navigation">
        <p
          onClick={() => navTo('signin')}
          className="f3 link dim black underline pa3 pointer">
          Sign In
        </p>
        <p
          onClick={() => navTo('register')}
          className="f3 link dim black underline pa3 pointer">
          Register
        </p>
      </nav>
    );
  }
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.navigationReducer.isSignedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navTo: route => dispatch(navTo(route)),
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
