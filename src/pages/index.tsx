import Head from 'next/head';
import { useQuery } from 'react-query';
import { Container } from '../components/Container/style';
import Header from '../components/Header';
import { getAllProducts } from '../services/products';

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading, error } = useQuery(['products'], () =>
    getAllProducts(),
  );

  return (
    <div>
      <Head>
        <title>Next App by @phmc99</title>
        <meta name="description" content="Next App by @phmc99" />
      </Head>
      <Container>
        <Header />
        {JSON.stringify(data)}
      </Container>
    </div>
  );
}
