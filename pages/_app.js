import "../styles/globals.css";
import Head from 'next/head'
import { ThemeProvider } from "next-themes";

import data from "../data/portfolio.json";

const App = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="og:image" src=""/>
      <title>{data.title}</title>
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
};

export default App;
