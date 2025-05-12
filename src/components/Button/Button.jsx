import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ onClick, type = 'button', ariaLabel, children }) => {
  return (
    <StyledButton type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </StyledButton>
  );
};

export default Button;
