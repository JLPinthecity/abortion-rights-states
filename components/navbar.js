import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.links}>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
