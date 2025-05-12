import styled from 'styled-components';

export const GalleryItem = styled.ul`
  flex-basis: calc((100% - 120px) / 4);
`;
export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
