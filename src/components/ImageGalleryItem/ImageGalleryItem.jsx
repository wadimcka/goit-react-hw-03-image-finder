import React from 'react';
import { GalleryItem, ImageItemS } from './ImageGalleryItem.styled';

function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  openModal,
}) {
  return (
    <GalleryItem key={id} onClick={() => openModal({ largeImageURL, tags })}>
      <ImageItemS src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}

export default ImageGalleryItem;
