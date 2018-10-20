import React from 'react';

const LightBox = ({showPrevNext, hideLightBox, isLigthBox, selectedImage}) => {
  return <div className={`LightBox ${isLigthBox ? 'Show' : ''}`}>
    <span className="Close" onClick={hideLightBox} role="button" tabIndex="0">&times;</span>
    <button type="button" className="Prev" onClick={() => showPrevNext(false)}>&#10094;</button>
	<div className="LightBox-Content" >
		<img className="LightBox-Image" src={selectedImage.src} alt="lightbox" />
		<br/>
		<span>From {selectedImage.ownername} </span>
		<br/>
		<span> Photo updated on {selectedImage.dateupload}</span>
	</div>
    <button type="button" className="Next" onClick={() => showPrevNext(true)}>&#10095;</button>
  </div>
};

export default LightBox;