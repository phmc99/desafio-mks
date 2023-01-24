import React from 'react';
import { HeaderCartButton, HeaderContainer, HeaderLogo } from './style';
import { HiShoppingCart } from 'react-icons/hi';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <span className="mks">MKS</span> Sistemas
      </HeaderLogo>
      <HeaderCartButton>
        <HiShoppingCart /> 0
      </HeaderCartButton>
    </HeaderContainer>
  );
};

export default Header;
