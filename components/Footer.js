import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.box}>
          <div className={styles.footer_title}>Abortion is health care.</div>

          <div className={styles.footer_email}>
            Submit corrections or ask a question
            <Link
              href="mailto: hitherejoann@gmail.com"
              className={styles.footer_email}
            >
              <a> here</a>
            </Link>
            .
          </div>
        </div>

        <div className={styles.box}>
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
