import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { wrapper } from '../store';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
