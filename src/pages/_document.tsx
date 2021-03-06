import Document, { Head, Html, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

const isProduction = process.env.NODE_ENV === 'production';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>Davi Roberto</title>

        <Head>
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />

              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />

          <meta name="description" content="Davi Roberto - Frontend Engineer" />
          <meta name="author" content="davifsroberto" />
          <meta
            name="keywords"
            content="Davi Roberto, davifsroberto, davifsroberto.com, linkedin.com/in/davifsroberto, github.com/davifsroberto"
          />
          <meta property="og:title" content="Davi Roberto" />
          <meta property="og:description" content="Frontend Engineer" />
          <meta
            property="og:image"
            content="https://davifsroberto.com/assets/images/general/site-thumbnail.png"
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
