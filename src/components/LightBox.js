import React from 'react';
import PropTypes from 'prop-types';

const LightBox = ({
  showPrevNext, hideLightBox, isLigthBox, selectedImage,
}) => (
  <div className={`LightBox ${isLigthBox ? 'Show' : ''}`}>
    <button type="button" className="Close" onClick={hideLightBox}>&times;</button>
    <button type="button" className="Prev" onClick={() => showPrevNext(false)}>&#10094;</button>
    <div className="LightBox-Content">
      <img className="LightBox-Image" src={selectedImage.src} alt="lightbox" />
      <br />
      <span>{` From ${selectedImage.ownername}`}</span>
      <br />
      <span>{` Photo updated on ${selectedImage.dateupload}`}</span>
    </div>
    <button type="button" className="Next" onClick={() => showPrevNext(true)}>&#10095;</button>
  </div>
);

LightBox.propTypes = {
  showPrevNext: PropTypes.func.isRequired,
  hideLightBox: PropTypes.func.isRequired,
  isLigthBox: PropTypes.bool.isRequired,
  selectedImage: PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string,
    ownername: PropTypes.string,
  }).isRequired,
};

export default LightBox;
