import React from 'react';
import { LoadMoreBtn } from './Button.styled';

function Button({ onClick }) {
  return (
    <div>
      <LoadMoreBtn type="button" onClick={onClick}>
        Load more
      </LoadMoreBtn>
    </div>
  );
}

export default Button;
