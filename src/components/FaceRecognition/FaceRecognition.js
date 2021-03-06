import React from 'react';
import { connect } from 'react-redux';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" alt="" src={imageUrl} width="500px" heigh="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    box: state.faceRecognitionReducer.box,
    imageUrl: state.faceRecognitionReducer.imageUrl,
  };
};

export default connect(
  mapStateToProps,
  null,
)(FaceRecognition);
