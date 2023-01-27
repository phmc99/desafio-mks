import {
  CartListItemContainer,
  CartListItemPrice,
  CartListItemQuantityButton,
  CartListItemQuantityPrice,
  CartListItemRemoveButton,
} from './style';
import Image from 'next/image';
import { ICartProduct } from '../../types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  updateTotal,
} from '../../store/cart';
import toast from 'react-hot-toast';

interface CartListItemProps {
  product: ICartProduct;
}

const CartListItem = ({ product }: CartListItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveItem = () => {
    dispatch(removeItem(product.id));
    dispatch(updateTotal());
    toast.error(`Produto removido do carrinho`, {
      duration: 1200,
    });
  };

  const handleAddQuantity = () => {
    dispatch(incrementQuantity(product.id));
    dispatch(updateTotal());
  };

  const handleRemoveQuantity = () => {
    dispatch(decrementQuantity(product.id));
    dispatch(updateTotal());
  };

  return (
    <CartListItemContainer>
      <CartListItemRemoveButton onClick={handleRemoveItem}>
        X
      </CartListItemRemoveButton>
      <Image
        src={product.photo || 'https://prd.place/600'}
        alt="Product"
        width={150}
        height={150}
        priority
      />
      <h1>{product.name}</h1>
      <CartListItemQuantityPrice>
        <CartListItemQuantityButton>
          <button
            disabled={product.quantity === 1}
            onClick={handleRemoveQuantity}
          >
            -
          </button>
          <div className="quantity-value">{product.quantity}</div>
          <button onClick={handleAddQuantity}>+</button>
        </CartListItemQuantityButton>
        <CartListItemPrice>
          R${(Number(product.price) * product.quantity).toFixed()}
        </CartListItemPrice>
      </CartListItemQuantityPrice>
    </CartListItemContainer>
  );
};

export default CartListItem;
