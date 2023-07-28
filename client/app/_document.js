import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;