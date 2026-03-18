import React from "react";
import Head from "next/head";
import { generateMetadata } from "../../utils/yandex-metrika-tracker/generateMetadata";
import StructredData from "../StructuredData";
import data from "../../data/portfolio.json";

const AppHead = (params = {}) => {
  const metadata = generateMetadata(params);
  
  // SEO Meta tags from portfolio.json
  const siteTitle = data.metadata?.title || "Михаил Николашин — Senior Product Manager | Media, B2C, ML";
  const siteDescription = data.metadata?.description || "10+ лет в медиа. ML-рекомендации, Growth, UX/UI. LiveJournal, Woman.ru, ProductCamp. Senior PM / Lead PM в медиа и B2C продуктах";
  const siteKeywords = data.metadata?.keywords || "Senior Product Manager, Менеджер продукта, Media, B2C, ML, Recommendations, Growth, UX/UI, LiveJournal, Woman.ru";
  const ogTitle = data.metadata?.openGraph?.title || siteTitle;
  const ogDescription = data.metadata?.openGraph?.description || siteDescription;
  const ogImage = "/images/og-image.png"; // Default OG image
  const ogUrl = "https://michael-nikolashin.ru";
  const twitterCard = "summary_large_image";

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={data.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={ogUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content={data.name} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={data.name} />
      
      <StructredData />
    </Head>
  );
};

export default AppHead;
