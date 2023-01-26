import React from 'react';
import { HeaderCartButton, HeaderContainer, HeaderLogo } from './style';
import { HiShoppingCart } from 'react-icons/hi';

interface HeaderProps {
  setToggle: () => void;
}

const Header = ({ setToggle }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <span className="mks">MKS</span> Sistemas
      </HeaderLogo>
      <HeaderCartButton onClick={setToggle}>
        <HiShoppingCart /> 0
      </HeaderCartButton>
    </HeaderContainer>
  );
};

export default Header;
