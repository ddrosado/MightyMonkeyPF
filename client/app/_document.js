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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://www.mercadopago.com/v2/security.js"
            data-view="home"
          ></script>
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