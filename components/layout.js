import { useState } from "react";
import styles from "../styles/Layout.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div>
      <Header toggle={toggleSidebar} />
      <Sidebar show={showSidebar} toggle={toggleSidebar} />
      <main className={styles.main_wrapper}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
