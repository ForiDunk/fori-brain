import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/actions/userActions';
import './Navigation.css';

const Navigation = ({ isSignedIn, signOut }) => {
  if (isSignedIn) {
    return (
      <nav className="Navigation">
        <Link
          to="/signin"
          onClick={signOut}
          className="f3 link dim black underline pa3 pointer">
          Sign Out
        </Link>
      </nav>
    );
  } else {
    return (
      <nav className="Navigation">
        <Link to="/signin" className="f3 link dim black underline pa3 pointer">
          Sign In
        </Link>
        <Link
          to="/register"
          className="f3 link dim black underline pa3 pointer">
          Register
        </Link>
      </nav>
    );
  }
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.userReducer.isSignedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
