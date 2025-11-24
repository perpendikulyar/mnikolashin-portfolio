import data from "../../data/portfolio.json";

export function generateMetadata(
  params = {
    title: "",
    description: "",
    keywords: "",
    openGraph: {},
    canonical: "",
  }
) {
  const canonical = params.canonical || "https://michael-nikolashin.ru";

  return {
    title: params.title || data.metadata.title,
    description: params.description || data.metadata.description,
    keywords: params.keywords || data.metadata.keywords,
    openGraph: params.openGraph || data.metadata.openGraph,
    canonical: canonical,
  };
}
