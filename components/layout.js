import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
    // <div className={styles.layout}>
    //   <Head>
    //     <link rel="icon" href="/favicon.ico" />
    //     <meta name="description" content="Abortion laws by state" />
    //     <meta name="og:title" content={siteTitle} />
    //     <meta name="twitter:card" content="summary_large_image" />
    //   </Head>
    //   <Navbar />
    // </div>
  );
};

export default Layout;
