import { ThemeProvider } from "next-themes";

import "../styles/globals.css";
import YandexMetrikaProvider from "../utils/yandex-metrika-tracker/yandex-metika.provider";
import { config } from "../utils/config";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <YandexMetrikaProvider
        counterId={config.yandexMetrikaCounterId}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: false,
        }}
        trackPages={true}
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={true}
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
