import { ApolloProvider } from '@apollo/client'

import type { AppProps /*, AppContext */, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Won Games</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="The best Game Store in the world!"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
