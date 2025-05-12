import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 20px auto;
  display: block;
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  border-radius: 24px;
  background-color: #e0e0e0;
  color: #757575;
  cursor: not-allowed;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: blue;
    color: white;
  }
`;
