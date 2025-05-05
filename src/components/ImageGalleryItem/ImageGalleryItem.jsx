import React from 'react';

const ImageGalleryItem = ({ image }) => {
  return (
    <li>
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
};

export default ImageGalleryItem;
