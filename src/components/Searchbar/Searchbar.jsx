import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';

import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handlInputChange = event => {
    const request = event.target.value.trim().toLowerCase();
    this.setState({ searchValue: request });
  };

  handlerSubmit = event => {
    event.preventDefault();
    if (this.state.searchValue) {
      this.props.onSubmit(this.state);
      this.setState({ searchValue: '' });
    } else {
      toast.warn('Please enter a search value');
    }
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handlerSubmit}>
          <SearchFormBtn type="submit">
            <FcSearch size="20" />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormBtn>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handlInputChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
export default Searchbar;
