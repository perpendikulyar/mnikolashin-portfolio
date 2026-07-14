import defaultMetadata from "../data/defaultMetadata.json";

/**
 * Генератор метаданных для конкретной страницы
 * Позволяет переопределить базовые значения специфичными для страницы
 * @param {Object} params - Параметры для переопределения
 * @param {string} params.title - Заголовок страницы
 * @param {string} params.description - Описание страницы
 * @param {string} params.keywords - Ключевые слова
 * @param {Object} params.openGraph - OG-теги
 * @param {string} params.openGraph.title - Заголовок OG-тега
 * @param {string} params.openGraph.description - Описание OG-тега
 * @param {string} params.ogImage - URL изображения для Open Graph (переопределяет defaultMetadata.ogImage)
 * @param {string} params.canonical - Canonical URL
 * @param {string} params.pagePath - Путь страницы (для формирования URL)
 */
export function generatePageMetadata({
  title,
  description,
  keywords,
  openGraph: customOpenGraph = {},
  ogImage,
  canonical,
  pagePath,
} = {}) {
  const baseUrl = defaultMetadata.canonical;

  // Формируем полный URL страницы
  const pageUrl = canonical || (pagePath ? `${baseUrl}${pagePath}` : baseUrl);

  return {
    title: title || defaultMetadata.title,
    description: description || defaultMetadata.description,
    keywords: keywords || defaultMetadata.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: customOpenGraph.title || defaultMetadata.openGraph.title,
      description:
        customOpenGraph.description || defaultMetadata.openGraph.description,
      url: pageUrl,
    },
    twitter: {
      card: defaultMetadata.twitterCard,
      title: customOpenGraph.title || defaultMetadata.openGraph.title,
      description:
        customOpenGraph.description || defaultMetadata.openGraph.description,
      images: [ogImage || defaultMetadata.ogImage],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}
