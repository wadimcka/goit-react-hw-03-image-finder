import styled from 'styled-components';

export const SearchBar = styled('header')(() => {
  return {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 64,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    color: '#fff',
    backgroundColor: '#3f51b5',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2),' +
      '0px 4px 5px 0px rgba(0, 0, 0, 0.14),' +
      '0px 1px 10px 0px rgba(0, 0, 0, 0.12),',
  };
});

export const SearchForm = styled('form')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
  };
});

export const SearchFormBtn = styled('button')(() => {
  return {
    display: 'inline-block',
    width: 48,
    height: 48,
    border: 0,

    backgroundPosition: 'center',
    opacity: 0.6,
    transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',

    '&:hover, &:focus': {
      opacity: 1,
    },
  };
});

export const SearchFormButtonLabel = styled('label')(() => {
  return {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    clipPath: 'inset(50%)',
    border: 0,
  };
});

export const SearchFormInput = styled('input')(() => {
  return {
    display: 'inline-block',
    width: '100%',
    font: 'inherit',
    fontSize: 20,
    border: 'none',
    outline: 'none',
    paddingLeft: 4,
    paddingRight: 4,
    '&::placeholder': {
      font: 'inherit',
      fontSize: 18,
    },
  };
});
