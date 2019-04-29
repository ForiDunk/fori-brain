import React from 'react';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_are: 800,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

const App = ({ isSignedIn, route }) => (
  <div className="App">
    <Particles className="particles" params={particlesOptions} />
    <Navigation />
    {isSignedIn ? (
      <div>
        <Logo />
        <Rank />
        <ImageLinkForm />
        <FaceRecognition />
      </div>
    ) : route === 'signin' ? (
      <Signin />
    ) : (
      <Register />
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    isSignedIn: state.navigationReducer.isSignedIn,
    route: state.navigationReducer.route,
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
