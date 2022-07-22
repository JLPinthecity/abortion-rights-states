import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.links}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
