import { ModalOverlay, ModalWin } from './Modal.styled';
import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEsc);
  }

  handlePressEsc = event => {
    const { closeModal } = this.props;
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  render() {
    const { largeImageURL, tags, closeModal } = this.props;
    return (
      <ModalOverlay onClick={closeModal}>
        <ModalWin>
          <img src={largeImageURL} alt={tags} />
        </ModalWin>
      </ModalOverlay>
    );
  }
}

export default Modal;
