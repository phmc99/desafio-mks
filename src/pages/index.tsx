import Head from 'next/head';
import { Container } from '../components/Container/style';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App by @phmc99</title>
        <meta name="description" content="Next App by @phmc99" />
      </Head>
      <Container>
        <Header />
      </Container>
    </div>
  );
}
