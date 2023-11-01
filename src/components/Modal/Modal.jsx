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

  handlOverlayCkick = event => {
    console.log(event.target);
    console.log(event.currentTarget);
    const { closeModal } = this.props;

    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <ModalOverlay onClick={this.handlOverlayCkick}>
        <ModalWin>
          <img src={largeImageURL} alt={tags} />
        </ModalWin>
      </ModalOverlay>
    );
  }
}

export default Modal;
