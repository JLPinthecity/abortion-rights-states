/* eslint-disable react/display-name */
import styles from "../styles/Home.module.css";
import states from "../constants/states";
import USAMap from "react-usa-map";
import kebabCase from "../constants/kebabCase";
import { useRouter } from "next/router";
import SelectState from "../components/SelectState";

export default function Home(props) {
  const router = useRouter();

  const getStateFullName = (stateAbbr) => {
    // console.log("States list", states);
    // console.log("State abbreviation: ", stateAbbr);
    // console.log("Interpolated from array: ", states[stateAbbr]);
    let href = "/states/" + kebabCase(states[stateAbbr]);
    router.push(href);
  };

  const mapHandler = (event) => {
    // console.log("Map handler works!", event.target.dataset.name);
    getStateFullName(event.target.dataset.name);
  };

  //clicking on map returns state abbrev

  const statesCustomConfig = {
    // SD: {
    //   fill: "black",
    // },
  };

  return (
    <div className={styles.home_container}>
      <div className={styles.intro}>
        <div className={styles.text}>
          <p>
            Click on state below to see up-to-date data about abortion laws.
          </p>

          <p>
            See a break down of what each state mandates in terms of gestational
            limits on abortion bans, required and limited insurance coverage,
            mandatory waiting periods, and regulations regarding minors&apos;
            abortions.
          </p>
        </div>

        <div className={styles.title}>
          <h1>What Are My Abortion Rights?</h1>
        </div>
      </div>

      <SelectState />

      <div className={styles.map}>
        <USAMap
          customize={statesCustomConfig}
          onClick={mapHandler}
          className={styles.svg}
        />
      </div>
    </div>
  );
}
