import { AppProps } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/dist/base.min.css'

import tw, { css, theme } from 'twin.macro'
import MdxWrapper from 'elements/MdxWrapper'

// import "styles/debug.css";

/**
 * Use this if you want to make initial setup,
 * import global CSS and add fonts,
 * or to add global context providers
 */

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Carbon</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div tw="min-h-screen font-sans antialiased break-words text-sky-black bg-sky-gray-100">
        <MdxWrapper>
          <Component {...pageProps} />
        </MdxWrapper>
      </div>
    </div>
  )
}

export default App
