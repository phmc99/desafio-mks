import { useSelector } from 'react-redux';
import { AppState } from '../../store';
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
  const { cart, total } = useSelector((state: AppState) => state.cart);

  return (
    <CartListContainer>
      <CartListHeader>
        <h1>Carrinho de compras</h1>
        <CartListCloseButton onClick={setToggle}>X</CartListCloseButton>
      </CartListHeader>
      <CartListUl>
        {cart.length > 0 ? (
          cart.map(item => <CartListItem product={item} key={item.id} />)
        ) : (
          <h3>Carrinho vazio</h3>
        )}
      </CartListUl>
      <CartListTotal>
        <h1>Total:</h1>
        <h1>R${Number(total).toFixed()}</h1>
      </CartListTotal>
      <CartListCheckoutButton>Finalizar Compra</CartListCheckoutButton>
    </CartListContainer>
  );
};

export default CartList;
