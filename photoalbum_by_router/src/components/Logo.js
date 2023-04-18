import React from 'react';

const Logo = () => {
  return (
    <img className='logo' src={`${process.env.PUBLIC_URL}/logo.png`} alt="Логотип" />
  );
};

export default Logo;