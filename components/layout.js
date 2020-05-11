import Link from "next/link";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    // backgroundColor: "red",
  },
});

const Layout = ({ children, title = "Omnivector Solutions" }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
};

export default Layout;
