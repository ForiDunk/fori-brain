import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import AuthRoute from './auth/AuthRoute';
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

const App = () => (
  <div className="App">
    <Particles className="particles" params={particlesOptions} />
    <Navigation />
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Redirect exact from="/" to="/signin" /> */}
      <AuthRoute exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/register" component={Register} />
    </Switch>
  </div>
);

export default App;
