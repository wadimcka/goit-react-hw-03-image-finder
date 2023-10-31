import React from 'react';
import { ModalOverlay, ModalWin } from './Modal.styled';

function Modal({ largeImageURL, tags, closeModal }) {
  return (
    <ModalOverlay>
      <ModalWin>
        <img src={largeImageURL} alt={tags} onClick={closeModal} />
      </ModalWin>
    </ModalOverlay>
  );
}

export default Modal;
