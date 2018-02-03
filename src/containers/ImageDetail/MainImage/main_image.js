import React from 'react';
import './main_image.css';

export default ({image}) => {
  const {pageURL, webformatURL} = image;
  return (
    <a
      href={pageURL}
      className="a-main-image"
    >
      <img src={webformatURL} className="main-image" alt=""/>
    </a>
  )
}
