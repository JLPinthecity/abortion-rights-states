import Link from "next/link";
import styles from "../styles/Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.title}>
          <Link href="/">
            <a>Abortion Rights by State</a>
          </Link>
        </div>

        <MenuIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
