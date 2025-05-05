import { ImageGalleryItem } from 'components';
import React from 'react';

const ImageGallery = ({ images }) => {
  return images.length === 0 ? null : (
    <ul>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
