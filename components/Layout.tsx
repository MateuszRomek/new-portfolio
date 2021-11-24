import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../styles/theme";
import { useDarkModeContext } from "../context/darkModeContext";
import styled from "@emotion/styled";

const ContentContainer = styled.div`
  transition-duration: 0.2s;
  transition-property: background-color, color;
  background-color: ${({ theme }) => theme.body2};
  min-height: 100vh;
`;

export const Layout: React.FC = ({ children }) => {
  const context = useDarkModeContext();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Matusz Romek</title>
        <meta property="og:url" content="http://www.mateuszromek.pl" />
        <meta
          property="og:description"
          content="Hello, I'm Mateusz Romek, a Frontend Developer from Poland"
        />
        <meta property="og:title" content="Mateusz Romek" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/943096/pexels-photo-943096.śjpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </Head>

      <ThemeProvider theme={context.isDarkMode ? darkTheme : lightTheme}>
       {isMounted && <ContentContainer>{children}</ContentContainer>}
      </ThemeProvider>
    </>
  );
};
