import { Html, Head, NextScript, Main } from "next/document";

import data from "../data/portfolio.json";

export default function Document() {
  return (
    <Html lang="ru" className="dark">
      <Head>
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Meta theme color */}
        <meta name="theme-color" content="#3B82F6" />
      </Head>
      <body className="dark:bg-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
