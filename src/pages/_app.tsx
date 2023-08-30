import { ContextProvider } from '@/context/context';
import Layout from '../components/layout/layout'
import '../styles/globals.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}