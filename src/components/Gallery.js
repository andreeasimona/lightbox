import React from 'react';
import {connect} from 'react-redux';
import {getImagesDispatcher} from '../state/dispatchers';
import getImages from '../api/images';
import LightBox from './LightBox';
import getImagePrevNextId from '../utils/parser_images';

class Gallery extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      selectedImage: {}
    };
  }

  componentDidMount() {
    getImages(this.getImages);
  }

  getImages = (data) => {
    const {getImagesProp} = this.props;
    console.log(data.images);
    getImagesProp(data.images);
  }

  showLightBox = (selectedId) => {
    const {images} = this.props;
    const selectedImage = images.find(item => item.id === selectedId); // change find for IE
    this.setState({selectedImage, isLigthBox: true, selectedId});
  }

  showPrevNext = (isNext) => {
    const {selectedId} = this.state;
    const {images} = this.props;
    const selectedPrevNextId = getImagePrevNextId(images, selectedId, isNext);
    this.showLightBox(selectedPrevNextId);
  }

  hideLightBox = () => {
    this.setState({isLigthBox: false});
  }

  render() {
    const {isLigthBox, selectedImage} = this.state;
    const {images} = this.props;
    return (
      <div>
        {images.map(data => (
          <div className="Image-Container" key={`galley-${data.id}`} onClick={() => this.showLightBox(data.id)} tabIndex="0" role="button">
            <img alt="img01" src={data.src} className="Image" width="200" height="200" />
            <span className="Image-Owner">{data.ownername}</span>
          </div>
        ))}
        <LightBox 
          showPrevNext={(isNext) => this.showPrevNext(isNext)}
          hideLightBox={this.hideLightBox}
          isLigthBox={isLigthBox}
          selectedImage={selectedImage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({images: state.images});
const mapDispatchToProps = dispatch => (
  {
    getImagesProp: images => dispatch(getImagesDispatcher(images)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
