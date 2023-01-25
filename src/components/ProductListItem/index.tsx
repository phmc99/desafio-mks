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

interface ProductListItemProps {
  isLoading?: boolean;
  product: IProduct;
}

const ProductListItem = ({ isLoading, product }: ProductListItemProps) => {
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
          <ProductListItemPrice>R${product.price}</ProductListItemPrice>
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

      <ProductListItemButton>
        <FiShoppingBag /> Comprar
      </ProductListItemButton>
    </ProductListItemContainer>
  );
};

export default ProductListItem;
