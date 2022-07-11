/* istanbul ignore file */
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script defer src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        </Head>
          <link href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css' rel="stylesheet" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
