import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.links}>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/states">
            <a>States</a>
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

export default Footer;
