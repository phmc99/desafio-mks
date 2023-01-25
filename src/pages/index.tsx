import Head from 'next/head';
import { Container } from '../components/Container/style';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App by @phmc99</title>
        <meta name="description" content="Next App by @phmc99" />
      </Head>
      <Container>
        <Header />
        <ProductList />
        <Footer />
      </Container>
    </div>
  );
}
