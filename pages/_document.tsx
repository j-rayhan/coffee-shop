import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='description' content='Created by MD Jahirul Islam' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='icon' href='/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons+Sharp'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
