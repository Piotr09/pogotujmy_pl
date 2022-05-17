import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'

import GlobalStyle from '@styles/GlobalStyle'
import ThemeProvider from '@styles/ThemeProvider'
import Layout from '@organisms/Layout/Layout'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
)

export default App
