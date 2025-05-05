import React from 'react';

const Searchbar = ({ onSubmit }) => {
  const handelSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.query.value.toLowerCase().trim();
    if (query === '') {
      // ! тут будет TOAST!!
      console.log('введите данные для поиска', '!!!!!!!!');
      return;
    }
    onSubmit(query);
    evt.target.reset();
  };

  return (
    <header>
      <form onSubmit={handelSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          name="query"
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
