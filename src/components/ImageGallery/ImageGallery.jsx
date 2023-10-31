import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { ImageList } from './ImageGallery.styled';

function ImageGallery({ images, openModal }) {
  return (
    <ImageList>
      {images !== null &&
        images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
            openModal={openModal}
          />
        ))}
    </ImageList>
  );
}

export default ImageGallery;
