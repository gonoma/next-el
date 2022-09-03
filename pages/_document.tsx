import Document, { Head, Html, Main, NextScript } from 'next/document'

// For managing the headers and anything we want
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
