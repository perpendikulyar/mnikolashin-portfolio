import React from "react";
import Head from "next/head";
import { generatePageMetadata } from "../../utils/metadata";
import StructredData from "../StructuredData";

const AppHead = (params = {}) => {
  // Generate metadata using the shared function
  const metadata = generatePageMetadata(params);
  const ogImage =
    metadata.openGraph.images?.[0]?.url || metadata.twitter.images[0];

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={metadata.alternates.canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.alternates.canonical} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="Михаил Николашин" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metadata.alternates.canonical} />
      <meta name="twitter:title" content={metadata.openGraph.title} />
      <meta
        name="twitter:description"
        content={metadata.openGraph.description}
      />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Михаил Николашин" />

      <StructredData />
    </Head>
  );
};

export default AppHead;
