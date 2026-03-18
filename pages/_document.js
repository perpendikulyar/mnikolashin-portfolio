import { Html, Head, NextScript, Main } from "next/document";

import data from "../data/portfolio.json";

export default function Document() {
  return (
    <Html lang="ru" className="dark">
      <Head />
      <body className="dark:bg-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
