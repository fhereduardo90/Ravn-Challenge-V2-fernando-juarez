import '../public/styles/tailwind.sass';
import Navbar from '../src/components/Navbar';
import Head from 'next/head';

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
      <Component {...pageProps} />
    </div>
  </>
);

export default MyApp;
