import Link from "next/link";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about_wrapper}>
      <p>
        Abortion Rights by State is a tool anyone can use to familiarize
        themselves with abortion rights in any state.
      </p>

      <p>
        State laws are populated programmatically from the{" "}
        <Link href="https://www.abortionpolicyapi.com">
          <a target="_blank">Abortion Policy API</a>
        </Link>
        . Data from Abortion Policy API is updated at the end of every month.
      </p>

      <p>
        Abortion Rights by State aims to provide more clarity about state
        regulated on gestational limits, private and public insurance covers
        limits, rules
      </p>
    </div>
  );
};

export default About;
