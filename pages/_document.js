import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getStaticProps(ctx) {
    const initialProps = await Document.getStaticProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
    <Html lang="es-CL">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument