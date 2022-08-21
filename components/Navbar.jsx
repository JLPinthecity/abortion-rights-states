import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.navbar_wrapper}>
        <Link href="/" className={styles.links}>
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/states">
          <a>States</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
