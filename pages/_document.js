import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@200&family=Ibarra+Real+Nova:wght@500&family=Jost:wght@300&family=Nanum+Myeongjo&family=Poppins&family=Zilla+Slab:wght@300&display=swap"
            rel="stylesheet"
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
