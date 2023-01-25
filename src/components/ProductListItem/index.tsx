import Image from 'next/image';
import {
  ProductListItemButton,
  ProductListItemContainer,
  ProductListItemDescription,
  ProductListItemNamePrice,
  ProductListItemPrice,
} from './style';
import { FiShoppingBag } from 'react-icons/fi';

const ProductListItem = () => {
  return (
    <ProductListItemContainer>
      <Image
        src="https://prd.place/600"
        alt="Product"
        width={200}
        height={200}
        priority
      />
      <ProductListItemNamePrice>
        <h1>Nome do Produto</h1>
        <ProductListItemPrice>R$600</ProductListItemPrice>
      </ProductListItemNamePrice>
      <ProductListItemDescription>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
          reprehenderit quasi quisquam blanditiis, cumque sit quibusdam
          voluptatum exercitationem quod modi praesentium eos! At saepe
          veritatis repudiandae minima? Vero, tempora. Incidunt.
        </p>
      </ProductListItemDescription>
      <ProductListItemButton>
        <FiShoppingBag /> Comprar
      </ProductListItemButton>
    </ProductListItemContainer>
  );
};

export default ProductListItem;
