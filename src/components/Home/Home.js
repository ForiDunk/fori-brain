import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Rank from '../Rank/Rank';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';

const Home = ({ isSignedIn }) => {
  if (!isSignedIn) {
    return <Redirect to="/signin" />;
  }

  return (
    <div>
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.userReducer.isSignedIn,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Home);
