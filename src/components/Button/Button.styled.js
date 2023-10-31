import styled from 'styled-components';

export const LoadMoreBtn = styled('button')(() => {
  return {
    padding: '8px 16px',
    borderRadius: 2,
    backgroundColor: '#3f51b5',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    textAlign: 'center',
    display: 'inline-block',
    color: '#fff',
    border: 0,
    textDecoration: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 500,
    minWidth: 180,
    margin: '0 auto',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2),' +
      '0px 2px 2px 0px rgba(0, 0, 0, 0.14),' +
      '0px 1px 5px 0px rgba(0, 0, 0, 0.12)',

    '&:hover, &:focus': {
      backgroundColor: '#303f9f',
    },
  };
});
