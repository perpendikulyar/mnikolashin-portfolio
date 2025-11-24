import React from "react";
import Head from "next/head";
import { generateMetadata } from "../../utils/yandex-metrika-tracker/generateMetadata";
import StructredData from "../StructuredData";

const AppHead = (params = {}) => {
  const metadata = generateMetadata(params);

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      {/* <meta property="og:image" content={product.image} /> */}
      <link rel="canonical" href={metadata.canonical} />
      <StructredData />
    </Head>
  );
};

export default AppHead;
