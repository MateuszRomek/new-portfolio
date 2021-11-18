import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:url" content="http://www.mateuszromek.pl" />
        <meta
          property="og:description"
          content="Hello, I'm Mateusz Romek, a Frontend from Poland"
        />
        <meta property="og:title" content="Mateusz Romek" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
