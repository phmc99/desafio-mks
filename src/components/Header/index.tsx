import React from 'react';
import { HeaderCartButton, HeaderContainer, HeaderLogo } from './style';
import { HiShoppingCart } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

interface HeaderProps {
  setToggle: () => void;
}

const Header = ({ setToggle }: HeaderProps) => {
  const { cart } = useSelector((state: AppState) => state.cart);

  return (
    <HeaderContainer>
      <HeaderLogo>
        <span className="mks">MKS</span> Sistemas
      </HeaderLogo>
      <HeaderCartButton onClick={setToggle}>
        <HiShoppingCart /> {cart.length}
      </HeaderCartButton>
    </HeaderContainer>
  );
};

export default Header;
