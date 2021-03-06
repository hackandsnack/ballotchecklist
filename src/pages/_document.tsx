import Document, { 
  DocumentContext,
  Head, 
  Html, 
  Main, 
  NextScript
} from 'next/document'
import styled from '@emotion/styled'
import { primary, secondary } from '@lib/colors'
import { mediaQueries } from '@lib/mediaQueries'

const Body = styled.body(mediaQueries({
  background: secondary,
  color: '#353535',
  fontFamily: '"Open Sans", sans-serif',
  fontSize: '15px',
  fontWeight: 500,
  lineHeight: 2,
  margin: 0,
  'h1, h2, h3': {
    fontWeight: 700,
    lineHeight: 1.2,
    margin: 0,
    '&:not(:first-of-type)': {
      margin: '2rem 0 0'
    }
  },
  h1: {
    fontSize: [
      '1.75rem',
      '1.75rem',
      '2rem',
      '2rem',
      '2rem',
    ]
  },
  h2: {
    fontSize: [
      '1.5rem',
      '1.5rem',
      '1.75rem',
      '1.75rem',
      '1.75rem',
    ]
  },
  h3: {
    fontSize: [
      '1.25rem',
      '1.25rem',
      '1.5rem',
      '1.5rem',
      '1.5rem',
    ],
  },
  a: {
    color: primary
  },
  '*': {
    boxSizing: 'border-box'
  },
  '#__next': {
    position: 'relative'
  }
}))

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,500,700,800&display=swap" rel="stylesheet" />
          <link href="/images/favicon.png" rel="icon" type="image/png" />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}

export default MyDocument
