import Head from 'next/head';
import { useState } from 'react';
import CartList from '../components/CartList';
import { Container } from '../components/Container/style';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function Home() {
  const [cartToggle, setCartToggle] = useState<boolean>(false);

  const toggleCart = () => {
    setCartToggle(!cartToggle);
  };

  return (
    <div>
      <Head>
        <title>Next App by @phmc99</title>
        <meta name="description" content="Next App by @phmc99" />
      </Head>
      <Container>
        {cartToggle ? <CartList setToggle={toggleCart} /> : null}
        <Header setToggle={toggleCart} />
        <ProductList />
        <Footer />
      </Container>
    </div>
  );
}
