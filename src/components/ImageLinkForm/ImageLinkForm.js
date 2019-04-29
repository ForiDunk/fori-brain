import React from 'react';
import { connect } from 'react-redux';
import {
  frInputChange,
  frInit,
} from '../../store/actions/faceRecognitionActions';
import './ImageLinkForm.css';

const ImageLinkForm = ({ frInputChange, frInit, input, userId }) => {
  return (
    <div>
      <p className="f3">
        {'This Magic Brain will detect faces in your pictures. Git it a try!'}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5 center">
          <input
            onChange={data => frInputChange(data)}
            className="f4 pa2 w-70 center"
            type="text"
          />
          <button
            onClick={() => frInit({ input, userId })}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    input: state.faceRecognitionReducer.input,
    userId: state.userReducer.user.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    frInputChange: data => dispatch(frInputChange(data)),
    frInit: data => dispatch(frInit(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageLinkForm);
