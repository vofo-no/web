import { DefaultSeo } from "next-seo";
import "design/dist/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
