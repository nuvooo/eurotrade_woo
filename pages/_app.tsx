import type { AppProps } from 'next/app'
import Footer from '../packages/Footer'
import Header from '../packages/Header'
import Layout from '../packages/Layout'
import Navigation from '../packages/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout mode="light">
      <Header title="MyBubbleTea.com" />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}

export default MyApp
