import { useEffect } from "react";
import { useRouter } from "next/router";
import { useYandexMetrika } from "./yandex-metrika.hooks";

const YandexMetrikaProvider = ({
  counterId,
  children,
  options = {},
  trackPages = true,
}) => {
  const router = useRouter();
  const { trackPageView } = useYandexMetrika(counterId, options);

  // Отслеживание смены страниц
  useEffect(() => {
    if (!trackPages || !counterId) return;

    const handleRouteChange = (url) => {
      trackPageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router, trackPageView, trackPages, counterId]);

  // Первоначальная загрузка страницы
  useEffect(() => {
    if (trackPages && counterId) {
      trackPageView(window.location.pathname);
    }
  }, [trackPageView, trackPages, counterId]);

  return children;
};

export default YandexMetrikaProvider;
