import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
