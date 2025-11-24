import defaultJsonLd from "../../data/defaultJsonLd.json";

const StructredData = (params = { jsonLd: {} }) => {
  const data = params.jsonLd || defaultJsonLd;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructredData;
