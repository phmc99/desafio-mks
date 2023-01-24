import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { wrapper } from '../store';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { makeServer } from '../mirage';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default wrapper.withRedux(App);
