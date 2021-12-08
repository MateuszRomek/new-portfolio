import type { AppProps } from 'next/app';

import { DarkModeProvider } from '../context/darkModeContext';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
