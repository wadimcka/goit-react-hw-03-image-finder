import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <MagnifyingGlass
        visible={true}
        height="90"
        width="90"
        ariaLabel="magnifying-glass-loading"
        glassColor="white"
        color="blue"
      />
    </LoaderWrapper>
  );
};

export default Loader;
