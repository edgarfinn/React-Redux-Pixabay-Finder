import React from 'react';

export default ({images}) => {
  // console.log(images.data.hits);
  const {hits} = images.data
  console.log('when hits length is', hits.length);
  const listLength = hits.length > 4 ? 5 : hits.length;

  const imageShortList = hits.slice(1,listLength);

  const imageItems = imageShortList.map((image) => {
    return (
      <div
        key={image.id}
        className="image-list-item"
        >
          <img src={image.previewURL} alt=""/>

      </div>
    )
  })

  return (
    <div className="images-row">
      {imageItems}
    </div>
  )
}
