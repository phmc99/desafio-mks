import Image from 'next/image';
import {
  ProductListItemButton,
  ProductListItemContainer,
  ProductListItemDescription,
  ProductListItemNamePrice,
  ProductListItemPrice,
} from './style';
import { FiShoppingBag } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { IProduct } from '../../types';
import { SkeletonFlex, SkeletonLarge } from '../Feedbacks/style';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { addToCart, updateTotal } from '../../store/cart';
import toast from 'react-hot-toast';

interface ProductListItemProps {
  isLoading?: boolean;
  product: IProduct;
}

const ProductListItem = ({ isLoading, product }: ProductListItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    dispatch(updateTotal());
    toast.success(`Produto adicionado ao carrinho`, {
      duration: 1200,
    });
  };

  return (
    <ProductListItemContainer>
      {isLoading ? (
        <SkeletonLarge>
          <Skeleton width={240} height={200} />
        </SkeletonLarge>
      ) : (
        <Image
          src={product.photo || 'https://prd.place/600'}
          alt="Product"
          width={200}
          height={200}
          priority
        />
      )}

      {isLoading ? (
        <SkeletonFlex>
          <Skeleton width={110} height={32} />
          <Skeleton width={110} height={32} />
        </SkeletonFlex>
      ) : (
        <ProductListItemNamePrice>
          <h1>{product.name}</h1>
          <ProductListItemPrice>
            R${Number(product.price).toFixed()}
          </ProductListItemPrice>
        </ProductListItemNamePrice>
      )}

      {isLoading ? (
        <SkeletonLarge>
          <Skeleton width={240} height={48} />
        </SkeletonLarge>
      ) : (
        <ProductListItemDescription>
          <p>{product.description}</p>
        </ProductListItemDescription>
      )}

      <ProductListItemButton disabled={isLoading} onClick={handleAddToCart}>
        <FiShoppingBag /> Comprar
      </ProductListItemButton>
    </ProductListItemContainer>
  );
};

export default ProductListItem;
