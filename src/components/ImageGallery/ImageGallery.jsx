import React from 'react';

import { ImageGalleryItem } from 'components';
import { GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images, ...otherProps }) => {
  if (!images || images.length === 0) return null;
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} {...otherProps} />
      ))}
    </GalleryList>
  );
};

export default ImageGallery;
