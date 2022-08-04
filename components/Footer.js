import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.left}>
          <div className={styles.footer_title}>Abortion is health care.</div>
          <div className={styles.footer_email}>
            <p>
              If you have a question, want to submit a corrections or have a
              general inquiry, we would love to hear from you.
            </p>
          </div>
          <Link
            href="mailto: hitherejoann@gmail.com"
            className={styles.get_in_touch}
          >
            <a>
              <button>Get in Touch</button>
            </a>
          </Link>
        </div>

        <div className={styles.right}>
          <Link href="/" className={styles.box_link}>
            <a>Home</a>
          </Link>

          <Link href="/states" className={styles.box_link}>
            <a>States</a>
          </Link>

          <Link href="/about" className={styles.box_link}>
            <a>About</a>
          </Link>

          <Link href="/contact" className={styles.link}>
            <a>Contact</a>
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2022 All Rights Reserved.{" "}
        <Link className={styles.copyright} href="https://joannpan.dev/">
          <a target="_blank">Site credits.</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
