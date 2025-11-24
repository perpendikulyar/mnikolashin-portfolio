import { useEffect, useCallback } from "react";
import yandexMetrika from "./yandex-metrika";

export const useYandexMetrika = (counterId, options = {}) => {
  useEffect(() => {
    if (counterId) {
      yandexMetrika.init(counterId, options);
    }
  }, [counterId, options]);

  const trackPageView = useCallback((url = null) => {
    yandexMetrika.pageView(url);
  }, []);

  const trackEvent = useCallback(
    (category, action, label = null, value = null) => {
      yandexMetrika.event(category, action, label, value);
    },
    []
  );

  const trackGoal = useCallback((target, params = null) => {
    yandexMetrika.reachGoal(target, params);
  }, []);

  const setUser = useCallback((userId, userParams = {}) => {
    yandexMetrika.setUserInfo(userId, userParams);
  }, []);

  return {
    trackPageView,
    trackEvent,
    trackGoal,
    setUser,
  };
};
