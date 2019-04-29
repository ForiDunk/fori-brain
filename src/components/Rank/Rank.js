import React from 'react';
import { connect } from 'react-redux';

const Rank = ({ user }) => {
  return (
    <div>
      <div className="white f3">{`${
        user.name
      }, your current entry count is...`}</div>
      <div className="white f1 ">{user.entries}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Rank);
