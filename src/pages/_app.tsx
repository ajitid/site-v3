import { AppProps } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/dist/base.min.css'
import tw, { css } from 'twin.macro'

import { FC } from '@/common/types'
import { GlobalThemeProvider } from '@/services/theme-context'
import { font } from '@/styles'
import { MdxWrapper } from '@/elements/mdx-wrapper'

import '@/styles/global.css'
// import "@/styles/debug.css";

/**
 * Use this if you want to make initial setup,
 * import global CSS and add fonts,
 * or to add global context providers
 */

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Carbon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        css={css`
          ${tw`min-h-screen antialiased break-words text-sky-black bg-sky-gray-100`}
          ${font.serif}
        `}
      >
        <GlobalThemeProvider>
          <MdxWrapper>
            <Component {...pageProps} />
          </MdxWrapper>
        </GlobalThemeProvider>
      </div>
    </div>
  )
}

export default App
