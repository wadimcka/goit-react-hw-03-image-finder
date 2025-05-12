import React from 'react';

import { notify } from 'services/toast-messages';

import {
  Header,
  InputWraper,
  SearchIcon,
  SearchInput,
  StyledButton,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.query.value.toLowerCase().trim();
    if (query === '') {
      notify.noResults(query);
      evt.target.reset();
      return;
    }
    onSubmit(query);
    evt.target.reset();
  };

  return (
    <Header>
      <form onSubmit={handleSubmit}>
        <InputWraper>
          <SearchInput
            name="query"
            type="text"
            placeholder="Search images and photos"
            aria-label="Search query"
          />
          <StyledButton type="submit" aria-label="Search">
            <SearchIcon />
          </StyledButton>
        </InputWraper>
      </form>
    </Header>
  );
};

export default Searchbar;
