import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "../context/darkModeContext";
import {appWithTranslation} from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default appWithTranslation(MyApp); 
