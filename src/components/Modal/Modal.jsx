import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import placeholder from '../../assets/Placeholder.png';
import { ModalBackdrop, ModalImage, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressEscape);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressEscape);
    document.body.style.overflow = '';
  }

  handleBackdropClick = e => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
      this.props.closeModal();
    }
  };

  handlePressEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const largeImageURL = this.props.image?.largeImageURL || placeholder;
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalWindow>
          <ModalImage src={largeImageURL} alt="" />
        </ModalWindow>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
