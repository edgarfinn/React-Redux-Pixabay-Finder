import React, {Component} from 'react';
import {connect} from 'react-redux';
import MainImage from './MainImage/main_image.js';

import './image_detail.css';

class ImageDetail extends Component {

  render() {
    const {images} = this.props;
    return (
      <div className="image-detail">
        {
          images.data ?
          <MainImage
            image={images.data.hits[0]}
          /> :
          <p className="image-detail-cta">Use the colour selector to search some pictures</p>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(ImageDetail)
