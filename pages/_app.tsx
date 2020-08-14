import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { client } from '../src/graphql';
import Navbar from '../src/components/Navbar';
import '../public/styles/tailwind.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
      />
      <title>Ravn Star Wars Registry</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="w-screen h-screen">
      <Navbar />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  </>
);

export default MyApp;
