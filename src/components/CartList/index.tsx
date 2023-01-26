import { ICartProduct } from '../../types';
import CartListItem from '../CartListItem';
import {
  CartListCheckoutButton,
  CartListCloseButton,
  CartListContainer,
  CartListHeader,
  CartListTotal,
  CartListUl,
} from './style';

interface CartListProps {
  setToggle: () => void;
}

const CartList = ({ setToggle }: CartListProps) => {
  return (
    <CartListContainer>
      <CartListHeader>
        <h1>Carrinho de compras</h1>
        <CartListCloseButton onClick={setToggle}>X</CartListCloseButton>
      </CartListHeader>
      <CartListUl>
        <CartListItem product={{} as ICartProduct} />
        <CartListItem product={{} as ICartProduct} />
        <CartListItem product={{} as ICartProduct} />
        <CartListItem product={{} as ICartProduct} />
        <CartListItem product={{} as ICartProduct} />
        <CartListItem product={{} as ICartProduct} />
      </CartListUl>
      <CartListTotal>
        <h1>Total:</h1>
        <h1>R$798</h1>
      </CartListTotal>
      <CartListCheckoutButton>Finalizar Compra</CartListCheckoutButton>
    </CartListContainer>
  );
};

export default CartList;
