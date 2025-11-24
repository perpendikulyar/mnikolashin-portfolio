class YandexMetrika {
  constructor() {
    this.initialized = false;
    this.counterId = null;
  }

  init(counterId, options = {}) {
    if (this.initialized || !counterId) return;

    const script = document.createElement("script");
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
      ym(${counterId}, "init", ${JSON.stringify({
      id: counterId,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      ...options,
    })});
    `;
    document.head.appendChild(script);

    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/${counterId}" style="position:absolute; left:-9999px;" alt="" /></div>`;
    document.body.appendChild(noscript);
  }

  pageView(url = null) {
    if (!this.initialized) return;

    const params = [this.counterId, "hit"];
    if (url) params.push(url);

    window.ym?.(...params);
  }

  event(category, action, label = null, value = null) {
    if (!this.initialized) return;

    const params = [this.counterId, "reachGoal", action];

    if (label || value) {
      params.push({
        ...(label && {
          eventCategory: category,
          eventAction: action,
          eventLabel: label,
        }),
        ...(value && { value: value }),
      });
    }

    window.ym?.(...params);
  }

  reachGoal(target, params = null) {
    if (!this.initialized) return;

    if (params) {
      window.ym?.(this.counterId, "reachGoal", target, params);
    } else {
      window.ym?.(this.counterId, "reachGoal", target);
    }
  }

  setUserInfo(userId, userParams = {}) {
    if (!this.initialized) return;

    window.ym?.(this.counterId, "setUserID", userId);

    if (Object.keys(userParams).length > 0) {
      window.ym?.(this.counterId, "userParams", userParams);
    }
  }
}

const yandexMetrika = new YandexMetrika();

export default yandexMetrika;
