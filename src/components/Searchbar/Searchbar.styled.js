import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

export const Header = styled.header`
  background-color: #f4f4f4;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding-left: 50px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  border: 2px solid gray;
  border-radius: 50px;
  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: rgb(207, 203, 203);
    opacity: 1;
  }
`;

export const SearchIcon = styled(IoSearchOutline)`
  width: 20px;
  height: 20px;
  pointer-events: none;
  color: gray;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const InputWraper = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;

  &:focus-within ${SearchInput} {
    border-color: blue;
  }
  &:focus-within ${SearchIcon} {
    color: blue;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;
