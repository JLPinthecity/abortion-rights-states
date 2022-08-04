import Link from "next/link";
import styles from "../styles/Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <MenuIcon className={styles.icon} />
      <div className={styles.header_wrapper}>
        <div className={styles.title}>
          <Link href="/">
            <a>Abortion Rights by State</a>
          </Link>
        </div>

        <div className={styles.nav_container}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
