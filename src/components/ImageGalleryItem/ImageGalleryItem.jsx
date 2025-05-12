import React from 'react';

import placeholder from '../../assets/Placeholder.png';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL = placeholder, tags = 'No description' } = image;
  return (
    <GalleryItem
      onClick={() => {
        openModal(image);
      }}
    >
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
export default ImageGalleryItem;
