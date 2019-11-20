import React from 'react';

import NavBar from '../NavBar';

const Comp = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Comp;
