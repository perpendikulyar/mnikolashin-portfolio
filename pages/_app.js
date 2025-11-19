import { ThemeProvider } from "next-themes";

import "../styles/globals.css";
import YandexMetrikaProvider from "../utils/yandex-metrika-tracker/yandex-metika.provider";
import { config } from "../utils/config";
import {Head} from "next/document";
import { data } from "autoprefixer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <YandexMetrikaProvider
      counterId={config.yandexMetrikaCounterId}
      options={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: false
      }}
      trackPages={true}
      />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
