import AppHead from "../components/AppHead";
import { generatePageMetadata } from "../utils/metadata";

export default function BotOrigin() {
  return (
    <>
      <AppHead
        title="Бот-оригин | Михаил Николашин"
        description="Страница проекта бот-оригин. Информация о проекте и его функциональности."
        keywords="бот-оригин, бот, проект, Михаил Николашин"
        openGraph={{
          title: "Бот-оригин | Михаил Николашин",
          description:
            "Cтраница проекта бот-оригин. Информация о проекте и его функциональности.",
        }}
        pagePath="/bot-origin"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Бот-оригин</h1>
        <p className="text-lg">
          Это страница посвящена проекту бот-оригин. Здесь будет размещена
          информация о проекте.
        </p>
      </div>
    </>
  );
}
