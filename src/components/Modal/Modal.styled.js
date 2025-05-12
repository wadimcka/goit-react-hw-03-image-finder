import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 18, 18, 0.9);
  z-index: 1000;
`;

export const ModalWindow = styled.div`
  position: fixed;
  padding: 0;
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: calc(100vw - 80px);
  max-height: calc(100vh - 80px);
  overflow: hidden;
  border-radius: 8px;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
`;
