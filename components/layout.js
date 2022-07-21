import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Abortion laws by state" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
