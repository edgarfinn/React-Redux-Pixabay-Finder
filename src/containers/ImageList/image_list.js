import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImagesRow from './ImagesRow/images_row';
import './image_list.css';

class ImageDetail extends Component {

  render() {
    const {images} = this.props;

    return (
      <div className="image-list">
        {images.data && <ImagesRow images={images}/>}
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
