import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../../store/actions/userActions';
import './Signin.css';
import ToggleEye from '../ToggleEye/ToggleEye';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      toggle: true,
    };
  }
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    const { email, password } = this.state;
    this.props.signIn(email, password);
  };

  togglePassword = () => {
    //eslint-disable-next-line
    this.setState(prev => ({ toggle: !prev.toggle }));
    const passInput = document.querySelector('#password');
    passInput.type = passInput.type === 'text' ? 'password' : 'text';
  };

  render() {
    return (
      <article className="Signin br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                />
                <div
                  style={{ cursor: 'pointer', display: 'inline' }}
                  onClick={this.togglePassword}>
                  <ToggleEye open={this.state.toggle} />
                </div>
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <Link to="/register" className="f6 link dim black db pointer">
                Register
              </Link>
            </div>
          </div>
        </main>
      </article>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Signin);
