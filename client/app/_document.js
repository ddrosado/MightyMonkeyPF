import Document, { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  title: "MightyMonkeyClub",
  description: "club monito",
};

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.css" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"
          ></script>
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
          <script src="../path/to/flowbite/dist/datepicker.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/datepicker.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;