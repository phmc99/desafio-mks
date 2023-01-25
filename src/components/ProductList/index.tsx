import ProductListItem from '../ProductListItem';
import { ProductListContainer } from './style';
import { useQuery } from 'react-query';
import { getAllProducts } from '../../services/products';
import { ErrorContainer } from '../Feedbacks/style';

const ProductList = () => {
  const { data, isLoading, error } = useQuery(['products'], () =>
    getAllProducts(),
  );
  const emptyArray = new Array(8).fill(undefined);

  return (
    <ProductListContainer>
      {isLoading
        ? emptyArray.map((item: any, index: any) => (
            <ProductListItem product={item} isLoading={isLoading} key={index} />
          ))
        : null}
      {!isLoading
        ? data.products.map((item: any, index: any) => (
            <ProductListItem product={item} key={index} />
          ))
        : null}
      {error && (
        <ErrorContainer>
          <h1>Algo de errado aconteceu</h1>
        </ErrorContainer>
      )}
    </ProductListContainer>
  );
};

export default ProductList;
