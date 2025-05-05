import React from 'react';

const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <div>
      <button type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreButton;
