import "raf/polyfill";

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null;
  }
};

fixReanimatedIssue();

import Head from "next/head";
import { AppProps } from "next/app";
// import { ThemeProvider } from "@crutchcorn/shared-elements";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ThemeProvider> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
