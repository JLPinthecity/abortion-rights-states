import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main className={styles.main_wrapper}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
