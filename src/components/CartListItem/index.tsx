import {
  CartListItemContainer,
  CartListItemPrice,
  CartListItemQuantityButton,
  CartListItemQuantityPrice,
  CartListItemRemoveButton,
} from './style';
import Image from 'next/image';
import { ICartProduct } from '../../types';

interface CartListItemProps {
  product: ICartProduct;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CartListItem = ({ product }: CartListItemProps) => {
  return (
    <CartListItemContainer>
      <CartListItemRemoveButton>X</CartListItemRemoveButton>
      <Image
        src={'https://prd.place/600'}
        alt="Product"
        width={150}
        height={150}
        priority
      />
      <h1>Apple Watch Series 4 GPS</h1>
      <CartListItemQuantityPrice>
        <CartListItemQuantityButton>
          <button>-</button>
          <div className="quantity-value">1</div>
          <button>+</button>
        </CartListItemQuantityButton>
        <CartListItemPrice>R$600</CartListItemPrice>
      </CartListItemQuantityPrice>
    </CartListItemContainer>
  );
};

export default CartListItem;
