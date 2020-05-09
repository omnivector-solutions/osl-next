import Link from "next/link";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default ({ children, title = "Omnivector Solutions" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />

    {children}

    <Footer />
  </div>
);
