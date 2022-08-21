import Link from "next/link";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about_wrapper}>
      <p>
        Abortion Rights by State is a tool anyone can use to familiarize
        themselves with abortion rights in each state.
      </p>

      <p>
        State laws are populated programmatically from the{" "}
        <Link href="https://www.abortionpolicyapi.com">
          <a target="_blank">Abortion Policy API</a>
        </Link>
        . Data from Abortion Policy API is updated at the end of every month.
      </p>

      <p>
        Abortion Rights by State aims to provide clarity about wide-ranging
        state regulations regarding gestational limits, private and public
        insurance coverage limits, waiting periods, and parent
        notification/consent rules for minors seeking abortions.
      </p>

      <p>
        All searches are completely anonymous. No user data is ever tracked or
        stored.
      </p>
    </div>
  );
};

export default About;
