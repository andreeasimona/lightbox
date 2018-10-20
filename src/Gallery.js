import React from 'react';
import { connect } from 'react-redux';
import { getImagesDispatcher } from './state/dispatchers';
import getImages from './api/images';

class Gallery extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    getImages(this.getImages);
  }

  getImages = (data) => {
    const { getImagesProp } = this.props;
    getImagesProp(data.images);
  }

  showLightBox = (selectedId) => {
    const { images } = this.props;
    const selectedImage = images.find(item => item.id === selectedId).src; // change find for IE
    this.setState({ selectedImage, isLigthBox: true, selectedId });
  }

  showPrevNext = (isNext) => {
    const { selectedId } = this.state;
    const { images } = this.props;
    const selectedIdText = images.findIndex(item => item.id === selectedId);

    let selectedPrevNextId = isNext ? selectedIdText + 1 : selectedIdText - 1;
    if (selectedPrevNextId < 0) {
      selectedPrevNextId = images.length - 1;
    }
    if (selectedPrevNextId >= images.length) {
      selectedPrevNextId = 0;
    }
    this.showLightBox(images[selectedPrevNextId].id);
  }

  hideLightBox = () => {
    this.setState({ isLigthBox: false });
  }

  render() {
    const { isLigthBox, selectedImage } = this.state;
    const { images } = this.props;
    return (
      <div>
        {images.map(data => (
          <div className="Image-Container" key={`galley-${data.id}`} onClick={() => this.showLightBox(data.id)} tabIndex="0" role="button">
            <img alt="img01" src={data.src} className="Image" width="200" height="200" />
            <div className="Image-Owner">
              <div>
                {data.owner}
                {data.title}
              </div>
            </div>
          </div>
        ))}
        <div className={`LightBox ${isLigthBox ? 'Show' : ''}`}>
          <span className="Close" onClick={this.hideLightBox} role="button" tabIndex="0">&times;</span>
          <button type="button" className="Prev" onClick={() => this.showPrevNext(false)}>&#10094;</button>
          <img className="LightBox-content" src={selectedImage} alt="lightbox" />
          <button type="button" className="Next" onClick={() => this.showPrevNext(true)}>&#10095;</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ images: state.images });
const mapDispatchToProps = dispatch => (
  {
    getImagesProp: images => dispatch(getImagesDispatcher(images)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
